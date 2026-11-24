/* Authored, optional manifestations. No campaign locks or physical damage. */
(function(root){'use strict';
const events=[
['town_window',1,'town',8.5,5.5,11.5,6.5,'La silueta de la calle','Un hombre permanece bajo la lluvia. Ninguna de sus huellas aparece en el agua.','breath',3,'echo'],
['hotel_steps',1,'hotel',11.5,9.5,0,0,'Pasos en la habitación vacía','Se oyen dos pares de pasos. Solo uno se detiene cuando tú lo haces.','knock',3],
['room_voice',1,'room',5.5,5.5,0,0,'La voz del cilindro','El cilindro apagado repite una sílaba de la carta de Thomas.','whisper',4],
['night_guest',2,'night',13.5,4.5,15.5,4.5,'El huésped que no respira','Una figura espera al fondo. No se oye su respiración.','breath',7,'echo'],
['church_bell',3,'church',6.5,6.5,0,0,'La campana invertida','El repique parece llegar desde debajo de tus botas.','bell',5],
['archive_pages',3,'archive',7.5,3.5,0,0,'El libro mojado','Una página se mueve sin viento. El margen lleva la fecha de mañana.','whisper',4],
['docks_wake',4,'docks',9.5,9.5,12.5,9.5,'La estela sin barco','Algo ocupa el espacio entre las sombras del muelle.','water',6,'echo'],
['manor_clock',5,'manor',10.5,7.5,13.5,8.5,'La hora de Ada','El reloj se para. Por un instante alguien lleva tu abrigo.','knock',7,'other'],
['memory_breath',5,'memory',8.5,5.5,0,0,'El recuerdo ajeno','Recuerdas una habitación que nunca has visitado.','whisper',8],
['underpass_bubbles',6,'underpass',5.5,5.5,0,0,'El agua escucha','Las burbujas se ordenan al ritmo de tus pasos.','breath',7],
['isolation_voice',6,'isolation',7.5,1.5,9.5,1.5,'La voz detrás del muro','Thomas pronuncia tu nombre desde una dirección imposible.','whisper',8,'echo'],
['network_chorus',7,'network',7.5,4.5,0,0,'El coro de los ausentes','Los resonadores reproducen voces con una sola respiración.','bell',9],
['conduit_pulse',7,'conduit',12.5,8.5,0,0,'El pulso del conducto','El ruido de las máquinas coincide con tu pulso.','breath',9],
['reef_shadow',8,'reef',8.5,7.5,11.5,7.5,'La sombra de la marea','Una figura se recorta contra un horizonte que parece demasiado cercano.','bell',10,'echo'],
['city_reflection',8,'city',8.5,6.5,10.5,6.5,'La calle que te recuerda','Tu doble desaparece, pero su sombra permanece un instante.','whisper',10,'other']
].map(([id,chapter,map,x,y,ax,ay,title,text,cue,cost,look])=>({id,chapter,map,x,y,ax,ay,title,text,cue,cost,look}));
const byId=new Map(events.map(e=>[e.id,e]));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function valid(s){return s.omens===undefined||Array.isArray(s.omens)&&s.omens.length<=events.length&&new Set(s.omens).size===s.omens.length&&s.omens.every(id=>byId.has(id)&&byId.get(id).chapter<=s.chapter);}
function create(){return {cool:0,active:null,ttl:0,calm:0};}
function tick(r,s,w,dt,blocked=false){if(s.finished||s.health<=0)return null;dt=clamp(dt,0,.1);r.cool=Math.max(0,r.cool-dt);r.ttl=Math.max(0,r.ttl-dt);if(!r.ttl)r.active=null;if(blocked||s.hidden){r.calm=0;return null;}r.calm+=dt;if(r.calm>=12&&s.stability<100)s.stability=clamp(s.stability+dt*.48,0,100);if(r.cool>0)return null;
for(const e of events){if(e.map!==s.map||e.chapter!==s.chapter||s.omens?.includes(e.id))continue;const dx=e.x-s.x,dy=e.y-s.y,d=Math.hypot(dx,dy);if(d>1.25||d>.05&&w.castRay(s.x,s.y,dx/d,dy/d,Math.max(0,d-.04)).hit)continue;
if(e.look){const ax=e.ax-s.x,ay=e.ay-s.y,ad=Math.hypot(ax,ay);if(ad<.9||ad>6||Math.abs(Math.atan2(Math.sin(Math.atan2(ay,ax)-s.ang),Math.cos(Math.atan2(ay,ax)-s.ang)))>.65||w.castRay(s.x,s.y,ax/ad,ay/ad,Math.max(0,ad-.05)).hit)continue;}
(s.omens??=[]).push(e.id);s.stability=Math.max(10,s.stability-e.cost);r.cool=18;r.calm=0;r.active=e;r.ttl=4.5;return e;}return null;}
function apparition(r,s){const e=r.active;if(!e||!r.ttl||!e.look||e.map!==s.map)return [];return [{id:'omen_'+e.id,type:'echo',look:e.look,x:e.ax,y:e.ay}];}
function notes(s){return (s.omens||[]).map(id=>byId.get(id)).filter(Boolean);}
function level(s){return s.stability<=30?3:s.stability<=55?2:s.stability<=80?1:0;}
const api={events,valid,create,tick,apparition,notes,level};if(typeof module!=='undefined')module.exports=api;else root.InnHorror=api;
})(globalThis);
