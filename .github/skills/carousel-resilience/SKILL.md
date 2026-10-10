---
name: carousel-resilience
description:
  "Endurece carruseles React/Next.js frente a props ausentes o inválidas. Úsala
  para evitar errores por título, descripción o logos faltantes y para añadir
  placeholders visuales sin imágenes en CarouselClient o componentes similares."
---

# Carruseles resistentes a datos faltantes

## Cuándo usarla

- Un carrusel falla cuando no recibe todas sus props.
- El título, la descripción o la lista de logos/imágenes pueden ser `undefined`,
  `null` o estar vacíos.
- Se necesita un estado visual de reserva que mantenga el diseño sin depender de
  imágenes.

## Procedimiento

1. Inspecciona el componente, sus llamadas y los datos que recibe. Usa los
   nombres reales de las props y sus formas; no asumas que `testData` y
   `textData` son intercambiables.
2. Si vas a cambiar código Next.js, consulta primero la guía aplicable bajo
   `node_modules/next/dist/docs/` y respeta las instrucciones `AGENTS.md` del
   proyecto.
3. Normaliza los datos en el límite del componente. Accede a objetos opcionales
   con encadenamiento opcional y define valores de reserva apropiados para
   título y descripción. Usa `??` cuando solo debas reemplazar
   `null`/`undefined`; usa `||` si también quieres reemplazar cadenas vacías.
4. Antes de iterar logos, comprueba que el valor sea un arreglo. Trata tanto una
   prop ausente como un arreglo vacío como ausencia de contenido visual.
5. Cuando no haya logos, muestra varios slides placeholder con bloques de color
   sólido, sin cargar ni renderizar componentes de imagen. Conserva el alto,
   ancho y comportamiento responsive del carrusel; usa colores existentes en el
   proyecto cuando estén disponibles y evita que el estado de reserva cambie el
   tamaño del layout.
6. Mantén el camino de datos válidos sin cambios innecesarios. No ocultes
   errores de datos no relacionados ni agregues valores de muestra que parezcan
   contenido real.
7. Valida como mínimo los casos: props omitidas, `textData` omitido, `logos`
   omitido, `logos` vacío y logos válidos. Comprueba que no haya excepciones de
   render, que el fallback no intente cargar imágenes y que el carrusel con
   datos siga funcionando.
8. Ejecuta la validación más específica disponible, luego el lint del archivo o
   del proyecto. Si existe servidor de desarrollo y el cambio afecta la
   presentación, inspecciona el estado de reserva y el estado normal en el
   navegador.

## Criterios de finalización

- Ningún acceso a propiedades o `.map()` provoca una excepción cuando faltan
  props opcionales.
- La ausencia de logos produce bloques sólidos de reserva, sin imágenes rotas ni
  solicitudes de imagen.
- Título y descripción tienen fallbacks deliberados y no muestran `undefined`.
- Los datos válidos y el diseño existente conservan su comportamiento.
- La respuesta final resume el cambio y qué validaciones se ejecutaron.
