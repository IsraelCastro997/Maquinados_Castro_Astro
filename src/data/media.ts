/**
 * Medios de la landing. Para sustituir una imagen, cambia `src` (y `srcset` si hay
 * dos tamaños), `alt`, `credit`, `sourceUrl`, `width`, `height` y pon
 * `isPlaceholder` en false. No hace falta editar los componentes.
 *
 * Las fotografías con archivo son referencias de Pexels (licencia Pexels, uso
 * permitido). No son instalaciones, máquinas ni trabajos de MIC.
 * https://www.pexels.com/license/
 */
export type MediaItem = {
  src: string;
  srcset: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
  isPlaceholder: boolean;
  width: number;
  height: number;
};

export type ProcessVideo = {
  /** Ruta en public, por ejemplo `/media/proceso.mp4`. Vacío mantiene el aviso. */
  src: string;
  poster: string;
  /** Subtítulos WebVTT si el video incluye explicación hablada. */
  captions: string;
  width: number;
  height: number;
  title: string;
  note: string;
};

export const media = {
  hero: {
    src: '/maquinado-1440.webp',
    srcset: '/maquinado-720.webp 720w, /maquinado-1440.webp 1440w',
    alt: 'Detalle de una herramienta de fresado trabajando una pieza metálica; imagen de referencia, no es maquinaria de MIC',
    caption: 'Imagen de referencia',
    credit: 'Daniel Smyth / Pexels',
    sourceUrl: 'https://www.pexels.com/photo/heavy-machinery-in-a-machine-shop-8865189/',
    isPlaceholder: false,
    width: 1440,
    height: 1276,
  },
  largeLathe: {
    src: '',
    srcset: '',
    alt: 'Torno industrial en una toma amplia. No es equipo de MIC y no indica diámetro, longitud ni peso del taller.',
    caption: 'Torno de gran tamaño por incorporar. Conviene una toma amplia, con una persona o una pieza que muestre la escala.',
    credit: '',
    sourceUrl: '',
    isPlaceholder: true,
    width: 1600,
    height: 900,
  },
  operation: {
    src: '/media/proceso-1200.jpg',
    srcset: '/media/proceso-720.jpg 720w, /media/proceso-1200.jpg 1200w',
    alt: 'Fresadora industrial trabajando sobre una mesa de sujeción; imagen de referencia, no es maquinaria de MIC',
    caption: 'Máquina en operación',
    credit: 'Connor Lucock / Pexels',
    sourceUrl: 'https://www.pexels.com/photo/28929510/',
    isPlaceholder: false,
    width: 1200,
    height: 750,
  },
  parts: {
    src: '/media/piezas-1400.jpg',
    srcset: '/media/piezas-800.jpg 800w, /media/piezas-1400.jpg 1400w',
    alt: 'Detalle de piezas metálicas mecanizadas; imagen de referencia, no son trabajos de MIC',
    caption: 'Piezas mecanizadas',
    credit: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/28752153/',
    isPlaceholder: false,
    width: 1400,
    height: 933,
  },
  facility: {
    src: '',
    srcset: '',
    alt: 'Vista general del taller. Sustituir por una fotografía propia de las instalaciones de MIC.',
    caption: 'Vista general del taller por incorporar.',
    credit: '',
    sourceUrl: '',
    isPlaceholder: true,
    width: 1600,
    height: 1000,
  },
  video: {
    src: '',
    poster: '',
    captions: '',
    width: 1280,
    height: 720,
    title: 'Video del proceso por incorporar',
    note: 'Toma horizontal de 15 a 30 segundos. El reproductor aparece cuando `src` apunta a un archivo local existente. Si hay voz, agrega subtítulos en `captions`.',
  },
} satisfies { hero: MediaItem; largeLathe: MediaItem; operation: MediaItem; parts: MediaItem; facility: MediaItem; video: ProcessVideo };
