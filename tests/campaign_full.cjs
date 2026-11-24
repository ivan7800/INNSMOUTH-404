const A=require('node:assert/strict'),C=require('../src/content'),Q=require('../src/campaign'),E=require('../src/engine');let n=0;
function ck(v,m){A.ok(v,m);n++}
for(const ward of ['share','conceal'])for(const thomas of ['escort','shelter'])for(const route of ['sever','isolate','listen']){
 if(ward==='conceal'&&route==='isolate')continue;
 let s=Q.fresh();function check(){ck(Q.validate(s,C,E),`${s.chapter} ${s.map} ${Q.objective(s)}`);s=Q.migrate(JSON.parse(JSON.stringify(s)));ck(Q.validate(s,C,E),'round trip')}
 function add(...ids){ids.forEach(id=>Q.add(s,id));check()}
 function go(map){s.map=map;[s.x,s.y,s.ang]=C.maps[map].spawn;check()}
 function next(){s.finished=true;check();ck(Q.advance(s),'advance');check()}
 check();add('silas');go('hotel');s.key=true;add('register');ck(Q.deduce(s,['letter','silas','register']),'deduce');go('room');add('photo');next();
 add('night_note','night_register');s.serviceKey=true;go('service');add('service_plan');next();
 add('eleanor');go('church');add('harker');go('archive');add('archive_log','frequency','archive_map');ck(Q.tune(s,[110,330,220]),'tune');go('church');next();
 add('dock_clara','cargo_log');go('cannery');add('pump_note');s.diverted=true;add('thomas_trace');go('tide');add('deep_witness','tide_photo');next();
 add('manor_clara','ward_portrait','mother_letter');go('study');add('ward_ledger','ward_record');ck(Q.unlockMemory(s,['bell','portrait','cylinder']),'memory');go('memory');add('ward_other','memory_truth');ck(Q.conclude(s,'copies',Q.investigations.copies.evidence,'record'),'copies deduction');ck(Q.chooseWard(s,ward),'ward');next();
 add('drain_log','under_mark');go('pressure');add('pressure_diagram','pressure_manual');ck(Q.regulate(s,['intake','purge','outlet']),'pressure');go('isolation');add('isolation_log','thomas_real','thomas_copy');ck(Q.proveIdentity(s,'thomas_real',['isolation_log','thomas_real','thomas_copy']),'identity');ck(Q.chooseThomas(s,thomas),'Thomas');next();
 add('network_log','network_ada','network_eleanor');go('conduit');add('conduit_note');ck(Q.sealConduit(s),'seal');go('ritual');add('ritual_harker','ritual_chart');ck(Q.tuneNetwork(s,['port','bell','reef']),'network');ck(Q.conclude(s,'cost',Q.investigations.cost.evidence,'witness'),'cost deduction');ck(Q.chooseNetwork(s,route),'choice');next();
 add('reef_signal','reef_silas','reef_chart');go('city');add('city_inscription','city_other');ck(Q.anchor(s,['voice','stone','light']),'anchor');go('final');add('final_harker','final_thomas');ck(!Q.applyFinal(s,null),'cannot skip trial');ck(!Q.finalAction(s,'node_a','break'),'cannot skip identity');ck(!Q.finalAction(s,'voice','record_is_alive'),'wrong identity blocked');ck(Q.finalAction(s,'voice','closed_record'),'identify voice');ck(!Q.finalAction(s,'node_c',({sever:'break',isolate:'seal',listen:'offer'})[route]),'node order');for(const id of ['node_a','node_b','node_c'])ck(Q.finalAction(s,id,({sever:'break',isolate:'seal',listen:'offer'})[route]),'final node');ck(!Q.applyFinal(s,route==='listen'?null:'harbor'),'wrong memory rejected');ck(Q.applyFinal(s,route==='listen'?'harbor':null),'final');s.finished=true;check();ck(s.endingId===({sever:'dawn',isolate:'silence',listen:'inheritance'})[route],'expected ending');ck(!Q.advance(s),'finished');
}
console.log(`${n} comprobaciones continuas desde fresh() hasta los tres finales; 10 recorridos lógicos con pistas obligatorias solamente.`)
