# Maquinados Industriales Castro — sitio Astro

Landing industrial estática, todavía no publicada. La dirección comercial y los criterios de contenido están en `docs/SDD_MAQUINADOS_CASTRO.md`.

## Ejecutar

Requiere Node 22.19.0 o posterior. La versión usada y fijada en `.nvmrc` es 26.10.0.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`npm run dev` y `npm run preview` usan el puerto 4173. El resultado estático se genera en `dist/`.

## Completar los datos manualmente

Edita `src/data/business.ts`:

- `business`: teléfono y WhatsApp ya usan 33 3127 2697. Faltan correo, domicilio, código postal, Maps y horario. Estos datos aparecen automáticamente en Contacto.
- `servicesPendingOwnerReview` y `quoteFormStatus`: el dueño revisará el alcance de diseño, fabricación de maquinaria y mantenimiento, y si el preparador de solicitud se queda, se adapta o se quita.
- `capacities`: sustituye cada indicación pendiente con modelo y capacidades verificadas de cada familia de equipo.
- `projects`: agrega únicamente casos documentados; el bloque permanece oculto mientras el arreglo esté vacío.
- `testimonials`: agrega únicamente testimonios reales y autorizados; el bloque permanece oculto mientras esté vacío.
- `clients`: conserva solo relaciones comerciales confirmadas.

Las imágenes y el video se cambian en `src/data/media.ts`, sin editar componentes. Cada entrada tiene `src`, `alt`, `caption`, `isPlaceholder` y dimensiones.

- Hero: `public/maquinado-720.webp` y `public/maquinado-1440.webp` (Daniel Smyth / Pexels). Conserva `fetchpriority` en el componente del hero.
- Torno grande: `media.largeLathe`. Hoy es un espacio vacío. Al tener la foto, pon `src`, dimensiones y `isPlaceholder: false`.
- Máquina en operación: `public/media/proceso-720.jpg` y `proceso-1200.jpg` (Connor Lucock / Pexels).
- Piezas: `public/media/piezas-800.jpg` y `piezas-1400.jpg` (Pexels 28752153).
- Vista del taller: `media.facility`. Hoy es un espacio vacío.
- Video: `media.video.src` con un archivo local, por ejemplo `public/media/proceso.mp4`. Opcional: `poster` y `captions` (`.vtt`). Si `src` está vacío o el archivo no existe, solo se muestra el aviso, sin botón de reproducción.

Las fotos actuales son referencias con licencia Pexels. No son instalaciones, máquinas ni trabajos de MIC.

## Cotización y publicación

El formulario no envía datos: valida, prepara y copia un mensaje. Al configurar `business.whatsapp`, habilita el enlace con el resumen precargado. No hay API, carga de archivos, CRM ni analítica.

La vista previa conserva `noindex,nofollow`. Para producción, revisa todo el contenido, configura `PUBLIC_SITE_URL` con el dominio definitivo y cambia `publicReady` a `true` solamente cuando nombre, domicilio y WhatsApp sean reales. Eso habilita canonical, LocalBusiness y sitemap público.

No se incluyen hosting, credenciales, publicación ni campañas de anuncios.
