const assert=require('node:assert/strict'),C=require('../src/content'),E=require('../src/engine');
let count=0;
for(const [id,m] of Object.entries(C.maps)){
 const w=E.createWorld(m.grid);
 for(const o of m.objects.filter(o=>!o.decor)){
  let good=false;
  for(let y=Math.floor(o.y)-2;y<=Math.floor(o.y)+2;y++)for(let x=Math.floor(o.x)-2;x<=Math.floor(o.x)+2;x++){
   const a=x+.5,b=y+.5,d=Math.hypot(o.x-a,o.y-b);
   if(d<.03||d>2||!w.canMove(a,b)||w.castRay(a,b,(o.x-a)/d,(o.y-b)/d,d-.05).hit)continue;
   if(!w.path(m.spawn[0],m.spawn[1],a,b).length)continue;good=true;
  }
  assert(good,`${id}/${o.id}: no reachable visible interaction position`);count++;
 }
}
console.log(`${count} objetos interactivos: posición alcanzable con línea de visión y distancia <=2.`);
