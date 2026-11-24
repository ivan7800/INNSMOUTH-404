(function(root){'use strict';
const patrol=[{x:14.5,y:6.5},{x:10.5,y:9.5},{x:6.5,y:6.5},{x:14.5,y:4.5}];
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const profiles={stalker:{pace:1.15,chase:2.55,windup:.48,recovery:1.05,range:1.12},deep:{pace:1.5,chase:2.85,windup:.34,recovery:.92,range:1.12},guardian:{pace:.9,chase:2.05,windup:.72,recovery:1.2,range:1.22},crawler:{pace:1.7,chase:3.05,windup:.26,recovery:.8,range:1.05},shoggoth:{pace:.85,chase:1.95,windup:.94,recovery:1.4,range:1.42}};
function create(def){if(def)return {...create(),...def,x:def.patrol[0].x,y:def.patrol[0].y};return {id:'stalker',name:'El huésped',type:'stalker',look:'stalker',x:14.5,y:6.5,ang:Math.PI,state:'patrol',index:0,path:[],goal:null,think:0,wait:0,attack:0,windup:0,hitFlash:0,moving:false};}
function visible(a,p,w,senses=1){const d=distance(a,p);if(p.hidden||d>(a.vibration?1.8:p.lamp?6.5:3.8)*senses||d<.01)return false;const dx=(p.x-a.x)/d,dy=(p.y-a.y)/d;return (d<1.4||Math.cos(a.ang)*dx+Math.sin(a.ang)*dy>-.1)&&!w.castRay(a.x,a.y,dx,dy,d-.05).hit;}
function update(a,p,w,dt,noise,distraction,rules={senses:1,speed:1,windup:1}){
 const profile=profiles[a.look]||profiles.stalker;a.attack=Math.max(0,a.attack-dt);a.hitFlash=Math.max(0,(a.hitFlash||0)-dt);a.think-=dt;const d=distance(a,p),see=visible(a,p,w,rules.senses),hear=!p.hidden&&noise>0&&d<noise*rules.senses*(a.vibration?1.65:1);let goal;const route=a.patrol||patrol;
 if(distraction&&!see){a.state='investigate';a.goal=distraction;a.wait=5;}else if(see){a.state='chase';a.goal={x:p.x,y:p.y};a.wait=5;}else if(hear){a.state='investigate';a.goal={x:p.x,y:p.y};a.wait=5;}else if(a.state==='chase'){a.state='investigate';a.wait=5;}
 if(a.state==='investigate'){a.wait-=dt;if(a.wait<=0){a.state='patrol';a.goal=null;}}
 if(a.windup>0){a.moving=false;a.windup=Math.max(0,a.windup-dt);if(a.windup>0)return 0;a.attack=profile.recovery;return see&&d<=profile.range+.08?a.damage||24:0;}
 if(see&&d<=profile.range&&a.attack<=0){a.windup=profile.windup*rules.windup;a.attack=a.windup+profile.recovery;a.moving=false;a.ang=Math.atan2(p.y-a.y,p.x-a.x);return 0;}
 if(a.state==='patrol'){goal=route[a.index];if(distance(a,goal)<.25){a.index=(a.index+1)%route.length;goal=route[a.index];}}else goal=a.goal;if(!goal)return 0;
 if(a.think<=0){a.path=w.path(a.x,a.y,goal.x,goal.y);a.think=.28;}let dest=a.path[0];if(dest&&distance(a,dest)<.12){a.path.shift();dest=a.path[0];}if(!dest&&Math.floor(a.x)===Math.floor(goal.x)&&Math.floor(a.y)===Math.floor(goal.y))dest=goal;const old={x:a.x,y:a.y};
 if(dest){const dd=distance(a,dest);if(dd>.08&&!(see&&d<1.02)){const speed=a.state==='chase'?profile.chase:profile.pace,step=Math.min(dd,speed*rules.speed*dt,see?Math.max(0,d-.82):Infinity);a.ang=Math.atan2(dest.y-a.y,dest.x-a.x);w.move(a,(dest.x-a.x)/dd*step,(dest.y-a.y)/dd*step);}}
 a.moving=distance(old,a)>.001;if(!a.moving&&dest&&distance(a,dest)>.3)a.think=0;return 0;
}
const api={create,update,visible,patrol,profiles};if(typeof module!=='undefined')module.exports=api;else root.InnAI=api;})(globalThis);
