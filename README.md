# INNSMOUTH-404 — La herencia de las profundidades

**v1.0.0-rc.8 · Pixel Art Gótico Costero** — candidata a publicación, no versión estable certificada.

Survival horror narrativo en primera persona inspirado en los Mitos de Cthulhu, ambientado en Innsmouth en 1927. Proyecto independiente de ASHEN-VEIL-404.

- Ocho capítulos, 23 mapas, tres finales, 60 evidencias principales.
- Investigación, exploración, sigilo, combate con recursos limitados, cordura y decisiones.
- Siete historias secundarias y 15 manifestaciones sobrenaturales.
- Teclado, ratón, mando y controles táctiles; tres perfiles gráficos y dificultades.
- Guardados, exportación e importación JSON; WebGL experimental y motor 2.5D de compatibilidad.

## Jugar

Abre `JUGAR-SIN-INSTALAR.html` directamente o sirve `index.html` mediante un servidor HTTP estático. Por ejemplo:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Abre http://127.0.0.1:8000/. WASD para moverse, flechas/ratón para mirar, E interactuar, J diario, M mapa, F linterna, C sigilo, G disparar, R recargar, K guardar, Esc pausa.

## GitHub Pages

En Settings → Pages, selecciona **Deploy from a branch**, `main`, `/(root)`. Una vez completado el despliegue, la URL prevista es https://ivan7800.github.io/INNSMOUTH-404/.

## Verificación

```bash
for f in tests/*.cjs; do node "$f" || exit; done
python3 tools/build_singlefile.py
git diff --exit-code -- JUGAR-SIN-INSTALAR.html
```

La RC.8 incorpora revisión narrativa, deducciones con selección de pruebas, consecuencias más claras y tres perfiles de dificultad con diferencias de detección, movimiento y recuperación. El guardado v8 migra partidas anteriores sin borrar progreso. Las decisiones ya tomadas conservan su resultado.

Consulta [la auditoría narrativa y jugable](docs/NARRATIVA-Y-QA-RC8.md) para la historia por capítulos, decisiones, tabla de dificultad y límites de las pruebas (**contiene spoilers**), y [CHANGELOG](CHANGELOG.md) para los cambios.

Quality ejecuta comprobaciones del núcleo, objetos, rutas lógicas, IA y diez recorridos mediante el controlador real con un DOM mínimo. Estos últimos navegan por rutas e invocan interacciones y transiciones de la interfaz; no ejecutan gráficos, audio ni amenazas durante la campaña. El HTML autónomo se regenera desde las fuentes y se comprueba que no haya diferencias.

Pendientes: partida humana completa, persistencia real en navegadores físicos, mando, móvil, rendimiento, mezcla de audio y validación WebGL. No se declara libre de bugs ni se certifica una puntuación artística.
