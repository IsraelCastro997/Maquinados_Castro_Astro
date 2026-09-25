// Completa domicilio, correo, horario y Maps antes de activar publicReady.
// Los campos vacíos no generan direcciones ni enlaces ficticios.
export const business = {
  name: 'Maquinados Industriales Castro',
  shortName: 'MIC',
  experience: 'Más de 20 años de experiencia',
  city: 'Guadalajara',
  region: 'Jalisco',
  phone: '+523331272697',
  phoneLabel: '33 3127 2697',
  whatsapp: '523331272697',
  facebook: 'https://www.facebook.com/profile.php?id=100083388876832',
  email: '',
  address: '',
  postalCode: '',
  mapsUrl: '',
  hours: '',
  publicReady: false,
  logo: '/278884689_100644149305471_5053131167194824663_n.jpg',
};

export type ContentStatus = 'confirmed' | 'proposed';

export const capacities = [
  { machine: 'Tornos CNC', status: 'confirmed', description: 'Componentes de revolución y trabajos de producción.', specification: 'Completar por equipo: modelo, volteo, longitud, paso de barra y número de ejes.' },
  { machine: 'Perfiladoras / fresado CNC', status: 'confirmed', description: 'Geometrías, superficies y detalles sobre plano.', specification: 'Completar por equipo: modelo, recorridos X/Y/Z, mesa y número de ejes.' },
  { machine: 'Tornos de gran tamaño', status: 'confirmed', description: 'Evaluación de piezas de grandes dimensiones.', specification: 'Completar por equipo: volteo, distancia entre puntos, peso y opciones de sujeción.' },
  { machine: 'Rectificadoras', status: 'confirmed', description: 'Operaciones de rectificado según aplicación.', specification: 'Confirmar tipo: plano, cilíndrico, interiores u otro; capacidades y acabados.' },
  { machine: 'Equipo convencional', status: 'confirmed', description: 'Torno, perfilado y operaciones complementarias a medida.', specification: 'Completar modelos, dimensiones de trabajo y aplicaciones.' },
] satisfies { machine: string; status: ContentStatus; description: string; specification: string }[];

// El propietario revisará el alcance y puede retirar alguno. No mostrar esta lista como advertencia en la página.
export const servicesPendingOwnerReview = [
  'Diseño e ingeniería',
  'Fabricación de maquinaria',
  'Mantenimiento y reparación industrial',
];

// El preparador de solicitud se conserva para consulta del propietario: puede mantenerlo, adaptarlo o retirarlo.
export const quoteFormStatus = 'pending-owner-review' as const;

// Agrega casos solo con datos verificables y fotografías autorizadas.
export const projects: {
  title: string;
  need: string;
  material: string;
  dimensions: string;
  process: string;
  result: string;
  image?: string;
  imageAlt?: string;
}[] = [];

// Agrega únicamente testimonios reales y autorizados.
export const testimonials: { quote: string; name: string; role: string; company: string }[] = [];

// Cliente confirmado por el propietario; el logo sigue pendiente.
export const clients = ['Dulces de la Rosa'];
