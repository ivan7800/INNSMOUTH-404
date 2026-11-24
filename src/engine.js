/* VEIL ENGINE 404 — adaptación de solid/canMove/move/castRay de ASHEN-VEIL-404
 * src/game.js blob 9768f5cace3baa4fb419a86113be27c7fbddd09f, líneas 281–307.
 * Motor original de ivan7800; la copia se mantiene independiente. */
(function(root){'use strict';
function createWorld(grid){
function solid(x,y){const ix=Math.floor(x),iy=Math.floor(y);if(iy<0||ix<0||iy>=grid.length||ix>=grid[0].length)return true;return grid[iy][ix]!==0;}
function canMove(x,y,r=.23){return !solid(x-r,y-r)&&!solid(x+r,y-r)&&!solid(x-r,y+r)&&!solid(x+r,y+r);}
function move(entity,dx,dy,r=.23){if(canMove(entity.x+dx,entity.y,r))entity.x+=dx;if(canMove(entity.x,entity.y+dy,r))entity.y+=dy;}
function castRay(x,y,dx,dy,limit){
  let ix=Math.floor(x),iy=Math.floor(y);
  const sx=Math.sign(dx),sy=Math.sign(dy);
  const stepX=Math.abs(1/dx),stepY=Math.abs(1/dy);
  let tx=sx?(sx>0?ix+1-x:x-ix)*stepX:Infinity;
  let ty=sy?(sy>0?iy+1-y:y-iy)*stepY:Infinity;
  while(Math.min(tx,ty)<=limit){
    if(Math.abs(tx-ty)<1e-9){
      if(solid(ix+sx,iy))return {hit:true,depth:tx,x:ix+sx,y:iy,side:0};
      if(solid(ix,iy+sy))return {hit:true,depth:ty,x:ix,y:iy+sy,side:1};
    }
    if(tx<ty){ix+=sx;if(solid(ix,iy))return {hit:true,depth:tx,x:ix,y:iy,side:0};tx+=stepX;}
    else{iy+=sy;if(solid(ix,iy))return {hit:true,depth:ty,x:ix,y:iy,side:1};ty+=stepY;}
  }
  return {hit:false,depth:limit};
}
function path(sx,sy,tx,ty){const start=[Math.floor(sx),Math.floor(sy)],goal=[Math.floor(tx),Math.floor(ty)];if(solid(...start)||solid(...goal))return [];const key=(x,y)=>x+','+y,q=[start],prev=new Map([[key(...start),null]]);for(let i=0;i<q.length;i++){const [x,y]=q[i];if(x===goal[0]&&y===goal[1]){const p=[];let cur=[x,y];while(cur){p.unshift({x:cur[0]+.5,y:cur[1]+.5});cur=prev.get(key(...cur));}return p.slice(1);}for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+dx,ny=y+dy,k=key(nx,ny);if(!solid(nx,ny)&&!prev.has(k)){prev.set(k,[x,y]);q.push([nx,ny]);}}}return [];}
return {grid,solid,canMove,move,castRay,path};}
const api={createWorld};if(typeof module!=='undefined')module.exports=api;else root.VeilEngine=api;
})(globalThis);
