# Auditoría narrativa y jugable — RC.8

24 de noviembre de 2026. Base: `e0a6f8e`. Contiene spoilers.

## Alcance y método

Inspección del contenido completo, controlador, campaña, IA, recursos, guardado y Quality. No se ha realizado una partida humana completa. Las conclusiones sobre ritmo y emoción son juicios editoriales basados en el guion y la lógica, no resultados de un estudio con jugadores.

Plan aplicado: corregir la causalidad de la fotografía y las reglas de las copias; preparar las motivaciones y los costes de las decisiones; añadir deducciones con selección de pruebas; diferenciar dificultad; comprobar interacciones y persistencia; documentar límites. El motor, mapas, posiciones y recursos gráficos se conservan.

## Historia y dificultad por capítulo

| Capítulo | Implementación de partida y problemas observados | Revisión aplicada | Riesgo que necesita juego humano |
|---|---|---|---|
| I · El último autobús | Elias llega el 17 de octubre buscando a Thomas. Silas le envía al Gilman. Relacionar carta, testimonio y registro abre la habitación 13. La fotografía parece situarlo allí el 28 de septiembre. El diario afirmaba que Thomas la había preparado sin demostrarlo. Sin amenaza física. | La reserva está pagada por Thomas pero sin firma de Elias. La carta llega por el acuerdo incumplido de Silas. La fotografía muestra una diferencia física y plantea una pregunta, no una respuesta. | Duración de la exploración inicial, fuerza del gancho y claridad de la deducción. |
| II · La habitación que respira | A las 23:15 cambian los pasillos. Nota, registro, llave, plano y escape; el huésped patrulla. Armarios y una botella ofrecen evasión. | Agnes explica la entrega de la carta y cómo ocultarse. Story detecta menos y avisa más; Dread exige más distancia y sigilo. | El mapa sigue siendo sencillo y un jugador experto puede eludir fácilmente al huésped. |
| III · La iglesia sin santos | Eleanor, Harker, archivo y resonador. La secuencia estaba escrita literalmente. No hay enemigo físico; pausa entre persecuciones. | Eleanor reconoce que facilitó las sesiones; Harker introduce su pérdida. La secuencia tiene una función dentro del registro: abrir, transmitir, cerrar. | El mecanismo sigue siendo un enigma accesible. No se ha convertido toda la campaña en una aventura de puzles complejos. |
| IV · Los hijos de la marea | Clara conduce a la conservera. Guardián, revólver opcional y válvula alternativa. El testigo apunta a la casa de Ada. | Clara distingue una fotografía de una prueba de supervivencia y explica el camino sin disparar. Se conserva la derivación para no depender de munición. | Equilibrio de carrera, sigilo y válvula; posible facilidad de la ruta pacífica. |
| V · La sangre que recuerda | Retrato de 1898, carta, grabación, caja, doble y testimonio. Elección compartir/ocultar. Era otra secuencia seguida de exposición. | Se aclara que Thomas aún no había nacido en el retrato. Ada admite su responsabilidad; Thomas abrió el registro y Harker usó la copia para la fotografía. Deducción obligatoria: contrastar cuaderno, grabación y respuesta del doble. Se avisa del bloqueo del aislamiento antes de ocultar registros. | Naturalidad del diálogo del doble y carga de lectura. El testimonio sigue concentrando parte de la explicación. |
| VI · Bajo las casas | Rastreador por vibraciones, regulador, dos voces y prueba de identidad. La opción correcta prácticamente venía resuelta por la etiqueta. | Hay que seleccionar acta y ambas respuestas. Se compara un suceso posterior al cierre del registro. Thomas explica su intento de ayudar a Elias. Acompañarlo permite calma adicional al tenerlo cerca; refugiarlo permite usar el botiquín una sola vez (+15 vida máximo). | Valor percibido de las alternativas y seguimiento del acompañante en juego real. |
| VII · Aquellos que esperan | Eleanor, conducto invulnerable, compuerta, Harker y sincronización. Cortar/aislar/escuchar. La elección era demasiado abstracta. | Harker admite los traslados y su autoengaño. Una deducción con tres evidencias establece el coste de alimentar la red. Cada opción explica qué destruye, conserva o vuelve a abrir. | Tensión al alcanzar la compuerta del Shoggoth; posibilidad de resolver demasiado deprisa. |
| VIII · La ciudad que sueña | Silas, arrecife, doble, ancla, cámara final y ejecución de la elección de VII. No hay jefe físico final. | El doble falla ante un acontecimiento nuevo; se distingue el cable de mantenimiento de la grabación cerrada. Se aclara la entrega de Thomas en el faro. Los epílogos reflejan testimonio público, documentos ocultos y ruta de evacuación. | El clímax depende de la puesta en escena y la decisión; hace falta valorar si la última zona sostiene la tensión sin combate. |

La cronología conserva los interludios existentes: llegada el 17, amanecer e investigación el 18, mansión y subsuelo el 19, arrecife a las 00:04 del 20. Las horas son hitos narrativos; el tiempo libre de exploración no altera las fechas del guion. Las conexiones entre zonas siguen usando puertas y transiciones de capítulo.

## Reglas sobrenaturales y personajes

La red adquiere recuerdos durante sesiones junto a resonadores. Una copia desconectada reproduce un registro cerrado: no observa ni incorpora el presente. No anticipa el futuro. La imagen del hotel fue preparada con una copia; no prueba un viaje temporal. La ciudad y el Testigo conservan la ambigüedad cósmica, pero no sustituyen estas reglas para resolver enigmas.

- Thomas abrió los registros para comprender los recuerdos de Elias; su error permite a Harker atraparlo. Pide que se compruebe su identidad antes de acercarse.
- Silas demoró la ayuda y entregó una carta que no había leído. Mantener la evacuación es su reparación práctica.
- Eleanor participó como médica en las sesiones. Reconoce el daño y asume evacuación, custodia y testimonio.
- Clara pasa de perseguir una imagen publicable a comprobar nombres y preservar pruebas. Compartir permite denunciar también a Ada.
- Ada inició la primera prueba y la interrumpió. Su advertencia no borra su responsabilidad.
- Harker sigue alimentando una voz que sabe incapaz de responderle. Su pérdida explica su conducta; la confesión no la absuelve.

## Decisiones y finales

| Decisión | Consecuencia implementada |
|---|---|
| Compartir registros | Conservas originales; Clara entrega copia. Habilita aislamiento y testimonio documental en epílogo. |
| Ocultar registros | Aislamiento deshabilitado, con advertencia previa. El epílogo reconoce las pruebas que faltan a las familias. |
| Acompañar a Thomas | Acompañante existente, recuperación adicional de estabilidad de 0,25/s cerca y sin peligro. Se queda en la ruta segura antes de la visión. |
| Refugiar a Thomas | Botiquín de la cámara: hasta +15 vida al elegir, una sola vez. Eleanor coordina su evacuación. |
| Cortar | «El último amanecer»: destruye archivo local y enlace; el sueño bajo el mar continúa. |
| Aislar | «El silencio imposible»: conserva registros mudos bajo custodia de Eleanor. Requiere compartir. |
| Escuchar | «La herencia»: Elias se convierte en nueva fuente; una carta aparece con su letra. |

La decisión de VII sigue siendo persistente; VIII la ejecuta, no ofrece una revocación secreta. Thomas sobrevive en ambas rutas. No se añaden muertes arbitrarias por una elección sin aviso.

## Dificultad implementada

Multiplicadores de IA respecto al comportamiento original. Los mismos puzles y finales están disponibles en los tres modos.

| Parámetro | Historia | Normal | Pavor |
|---|---:|---:|---:|
| Daño | 0,60 | 1,00 | 1,25 |
| Alcance visual/auditivo | 0,75 | 1,00 | 1,20 |
| Velocidad enemiga | 0,85 | 1,00 | 1,08 |
| Duración de preparación de ataque | 1,40 | 1,00 | 0,85 |
| Regeneración de aguante/s | 18 | 13 | 10 |
| Calma de estabilidad/s tras 12 s sin peligro | 0,80 | 0,48 | 0,25 |
| Vida al reintentar | 100 | 85 | 70 |

Se conservan los mínimos de salud de transición existentes y las rutas sin disparar. La estabilidad afecta a percepción; no se usa como llave invisible ni como derrota irreversible. Las escenas modales siguen deteniendo la simulación. Es una decisión de accesibilidad que también reduce la presión durante la lectura.

El autosave periódico espera cuando el enemigo persigue, investiga o está cerca. Las interacciones y guardados explícitos siguen guardando. No se afirma que todos los guardados se hagan en un lugar seguro. Reintentar recoloca al jugador en la entrada y conserva pistas y recursos restantes.

## Persistencia y verificación

Estado v8 con deducciones registradas. Se mantiene la clave de guardado. La migración desde v1–v7 conserva los campos existentes y da por resueltas las deducciones correspondientes a decisiones ya tomadas: no obliga a volver a capítulos cerrados. Los v8 sin deducciones necesarias o con inferencias desconocidas son rechazados.

Pruebas ejecutadas:

- `acceptance.cjs`: 126 objetos con posición alcanzable y visible.
- `core.cjs`: 587 comprobaciones de mapas, campaña y colisiones.
- `campaign_full.cjs`: 1.350 comprobaciones de diez recorridos lógicos.
- `difficulty.cjs`: 6.026 comprobaciones de detección, ataques, patrullas durante 60 segundos simulados y decisiones prematuras.
- `runtime_journey.cjs`: 4.325 comprobaciones de diez recorridos mediante el controlador real. DOM mínimo; navega por rutas del motor, completa diálogos, selecciona pruebas, resuelve puzles y pulsa transiciones. Recarga guardados de capítulo y final, comprueba migración v7 y rechaza deducciones incorrectas. No ejecuta renderizado, audio ni amenazas durante el recorrido.
- Sintaxis de todos los módulos y regeneración reproducible del HTML autónomo.

El arnés de controlador expone funciones solo en la copia del código cargada por el test, dentro de un contexto VM. La versión enviada al navegador no incluye un API de trucos ni un punto de acceso de pruebas.

## Pendientes y valoración editorial

Esta revisión da más causalidad a la trama y decisiones mejor informadas. No garantiza que el juego emocione ni una puntuación artística. Permanecen el patrón repetido de explorar/leer/mecanismo, las secuencias explícitas de varios puzles y la escasa amenaza física en III, V y VIII. Son descansos deliberados, pero su duración debe medirse con jugadores.

Se requiere una partida humana por cada final y dificultad, cronometrar capítulos, comprobar que las pistas no resulten obvias ni opacas, valorar voces y textos, probar seguimiento de Thomas, audio, persistencia física, Safari/iPhone, Firefox, Windows/Linux, controles táctiles y mando real. WebGL sigue siendo experimental. El navegador remoto no puede abrir el servidor local (conexión rechazada); no se usa ese intento como validación visual de RC.8.
