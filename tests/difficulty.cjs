const A=require('node:assert/strict'),AI=require('../src/ai'),Score=require('../src/score'),E=require('../src/engine'),C=require('../src/content'),Q=require('../src/campaign');
let n=0;function ck(v,m){A.ok(v,m);n++}
const w=E.createWorld(Array.from({length:12},(_,y)=>Array.from({length:12},(_,x)=>+(x===0||y===0||x===11||y===11))));
for(const mode of ['story','normal','dread']){
 const r=Score.rules(mode),a=AI.create(),p={x:6.5,y:5.5,lamp:true,hidden:false};a.x=1.5;a.y=5.5;a.ang=0;
 ck(AI.visible(a,p,w,r.senses)===(mode!=='story'),'detection boundary '+mode);
 a.x=5.5;AI.update(a,p,w,.01,0,null,r);ck(Math.abs(a.windup-AI.profiles.stalker.windup*r.windup)<1e-8,'windup '+mode);
 let damage=0;for(let i=0;i<150;i++)damage+=AI.update(a,p,w,.01,0,null,r);ck(damage>0,'attack resolves '+mode);p.hidden=true;ck(!AI.visible(a,p,w,r.senses),'hide '+mode);
 ck(r.retry>0&&r.retry<=100,'retry health '+mode);
}
ck(Score.damage(32,'story')<Score.damage(32,'normal')&&Score.damage(32,'normal')<Score.damage(32,'dread'),'damage ordering');
// Every authored patrol stays on walkable tiles over a minute, with no target.
for(const [id,def] of Object.entries({...C.threats,night:{...AI.create(),patrol:AI.patrol}})){
 const world=E.createWorld(C.maps[id].grid),a=AI.create(def),origin={x:a.x,y:a.y};let moved=0;
 for(let i=0;i<1200;i++){const old={x:a.x,y:a.y};AI.update(a,{x:1.5,y:1.5,hidden:true},world,.05,0,null);ck(world.canMove(a.x,a.y),'patrol collision '+id);moved+=Math.hypot(a.x-old.x,a.y-old.y)}ck(moved>10,'patrol moves '+id);
}
const s=Q.fresh();ck(!Q.conclude(s,'copies',['ward_ledger','ward_record','ward_other'],'record'),'uncollected evidence');ck(!Q.conclude(s,'cost',[],'witness'),'missing evidence');
ck(!Q.chooseNetwork(s,'listen'),'early final choice');ck(!Q.chooseWard(s,'share'),'early documents');ck(!Q.proveIdentity(s,'thomas_real',[]),'identity without evidence');
console.log(`${n} comprobaciones de dificultad, detección, ataques, patrullas y decisiones prematuras.`);
