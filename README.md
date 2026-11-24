# INNSMOUTH-404 — La herencia de las profundidades

**v1.0.0-rc.7.1 · Pixel Art Gótico Costero** — candidata a publicación, no versión estable certificada.

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

Los 21 módulos de ejecución, la hoja de estilos y los dos HTML corresponden exactamente a los archivos de la RC.7.1. Los recursos utilizados por el motor están incorporados en los módulos de arte y el CSS. El ZIP original de desarrollo conserva además los atlas originales, recursos PNG de edición, documentación histórica y las demás pruebas e informes. Esta primera importación incluye las tres pruebas originales de núcleo, campaña y accesibilidad.

Pendientes: partida humana completa, persistencia real en navegadores físicos, mando, móvil, rendimiento, mezcla de audio y validación WebGL. No se declara libre de bugs ni se certifica una puntuación artística.
