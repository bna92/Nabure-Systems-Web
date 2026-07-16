# Videos de servicios (Home)

Coloca aquí los clips que se reproducen en loop dentro de cada tarjeta de la
sección "Servicios" del Home ([Services.tsx](../../../src/components/sections/Services.tsx)).

El nombre del archivo debe coincidir exactamente con el `id` del servicio en
[services.ts](../../../src/data/services.ts):

| Archivo esperado              | Servicio                     |
| ------------------------------ | ----------------------------- |
| `sistemas-a-medida.mp4`        | Sistemas a la medida           |
| `sitios-web.mp4`                | Sitios web para cualquier giro |
| `puntos-de-venta.mp4`           | Puntos de venta (POS)          |
| `automatizacion-whatsapp.mp4`  | Automatización de WhatsApp     |

Recomendaciones para los clips:

- Sin audio (se reproducen `muted`), o el audio simplemente se ignora.
- Duración corta (5-15s) y que el último frame conecte bien con el primero,
  ya que se reproducen en `loop` continuo.
- Formato `mp4` (H.264). Peso ideal < 3-4 MB por clip para no afectar el
  rendimiento del Home.
- Relación de aspecto libre: se recortan con `object-cover` dentro de un
  contenedor de 160px de alto (`h-40`).

Si un archivo no existe todavía, la tarjeta simplemente no muestra video (el
espacio queda vacío/transparente) sin romper el layout.

## Optimizar un clip pesado

Los videos de cámara/pantalla suelen venir sin comprimir (10-30 MB para
pocos segundos). Antes de subirlos, comprímelos con `ffmpeg`:

```
ffmpeg -i original.mp4 -vf "scale=960:-2" -r 30 -c:v libx264 -preset medium -crf 28 -an -movflags +faststart nombre-del-servicio.mp4
```

- `scale=960:-2`: 960px de ancho es de sobra para un contenedor de 160px de
  alto (h-40), incluso en pantallas retina.
- `-crf 28`: buena relación calidad/peso para un clip decorativo en loop.
- `-an`: quita el audio (el `<video>` se reproduce `muted`, no hace falta).
- `-movflags +faststart`: permite que el video empiece a reproducirse antes
  de descargarse por completo.

Ejemplo real: un clip de 13s bajó de 28 MB a ~320 KB con este comando, sin
pérdida perceptible (es una grabación de pantalla, mayormente estática).
