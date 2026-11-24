# RC.9 · Iglesia, registros y última señal

## Cambios verificables

- III: equivocarse en el resonador reduce estabilidad y despierta una voz que patrulla la nave. El archivo continúa abierto y calibrar correctamente la apaga. La amenaza no aparece antes de un error. La secuencia correcta sigue indicada en las pruebas.
- V: compartir los registros da acceso a las vendas de Clara (hasta 10 de salud) y conserva la ruta de aislamiento. Ocultarlos apaga la grabación y recupera hasta 10 de estabilidad, pero bloquea el aislamiento. La reacción se muestra en la misma escena.
- VIII: antes de cerrar la red se distingue el cilindro repetido del cable vivo. Hay que recorrer físicamente los resonadores de puerto, campanario y arrecife. Cortar rompe los nodos, aislar los sella y escuchar ofrece un recuerdo. La memoria elegida en esta última ruta se refleja en el epílogo.

La escena final no incluye un jefe físico ni un temporizador. Los diálogos y paneles pausan el mundo, y los tres finales permanecen. El recorrido de nodos añade una acción espacial, pero la eficacia dramática y el tiempo real añadido requieren partidas humanas. No se afirma una nueva duración de campaña.

## Guardados y pruebas

El estado sigue en versión 8 y añade `churchAlarm`, `finalSteps` y `finalMemory`. La migración completa esos campos para partidas RC.8; una partida anterior terminada conserva su final. En el desenlace de escuchar ya completado se usa una marca interna de legado, sin fingir que el jugador eligió una memoria. Se rechazan progresos finales fuera de orden y memorias incompatibles con la ruta.

Las pruebas del controlador recorren diez combinaciones válidas de decisiones con las interacciones reales de los nodos. Una ruta provoca un error en la iglesia y verifica que la calibración elimina la alarma. Las pruebas no simulan una partida humana continua con amenazas, sonido, mando, táctil o rendimiento. Esas comprobaciones siguen pendientes.
