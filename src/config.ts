// Datos comerciales: revisar antes de publicar (precios, contacto y URLs de la app).
export const SITE = {
  name: 'TendiCloud',
  signupUrl: '#precios',
  loginUrl: '#',
  email: 'ventas@tendicloud.co',
  whatsapp: '',
  trialDays: 14,
};

export type Plan = {
  id: string;
  name: string;
  monthly: number | null;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: 'tienda',
    name: 'Tienda',
    monthly: 59900,
    blurb: 'Para la tienda de barrio que vende con una sola caja.',
    features: ['1 caja', '2 usuarios', 'POS con lector de código de barras', 'Tiquete en impresora térmica', 'Inventario y productos', 'Cartera (fiado)', 'Reportes del día'],
    cta: 'Probar gratis',
  },
  {
    id: 'negocio',
    name: 'Negocio',
    monthly: 109900,
    blurb: 'Para minimercados con varias cajas, turnos y proveedores.',
    features: ['Hasta 3 cajas a la vez', '8 usuarios con roles', 'Facturación electrónica DIAN', 'Arqueo por turno y medio de pago', 'Compras y proveedores', 'Todo lo del plan Tienda'],
    cta: 'Probar gratis',
    featured: true,
  },
  {
    id: 'cadena',
    name: 'A la medida',
    monthly: null,
    blurb: 'Para negocios con más cajas, más usuarios o necesidades propias.',
    features: ['Cajas y usuarios a la medida', 'Acompañamiento en la puesta en marcha', 'Migración de tus productos', 'Todo lo del plan Negocio'],
    cta: 'Hablar con ventas',
  },
];

export const SEO = {
  title: 'TendiCloud | Software POS para tiendas de barrio con factura electrónica DIAN',
  description:
    'Programa POS en la nube para tiendas de barrio, minimercados y droguerías en Colombia: ventas con lector de código de barras, caja con arqueo, inventario, fiado y facturación electrónica DIAN. Prueba gratis.',
  keywords: [
    'software POS', 'POS para tiendas', 'programa para tienda de barrio', 'sistema POS Colombia',
    'punto de venta en la nube', 'facturación electrónica DIAN', 'software para minimercados',
    'control de inventario', 'cuaderno del fiado', 'arqueo de caja', 'software para droguerías',
  ],
  locale: 'es_CO',
  // Código de verificación de Google Search Console (meta "google-site-verification"); vacío = no se publica.
  googleVerification: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
};

export const FAQS: [string, string][] = [
  ['¿Qué es TendiCloud?', 'TendiCloud es un software POS en la nube para tiendas de barrio, minimercados y negocios de mostrador en Colombia. Reúne en un solo lugar el punto de venta, la caja con arqueo, el inventario, el fiado, las compras a proveedores y la facturación electrónica DIAN.'],
  ['¿Tengo que instalar algo?', 'No. TendiCloud funciona desde el navegador del computador, la tablet o el celular. Solo necesitas conexión a internet; la impresora y el lector se conectan por USB al equipo donde vendes.'],
  ['¿Sirve para la facturación electrónica de la DIAN?', 'Sí. La factura electrónica sale desde el mismo POS, con su CUFE y su código QR. Para activarla necesitas tu RUT y una resolución de facturación vigente; te acompañamos en la configuración.'],
  ['¿Qué impresora necesito?', 'Cualquier impresora térmica de 58 u 80 mm compatible con ESC/POS conectada por USB. Si ya tienes una en el mostrador, lo más probable es que funcione.'],
  ['¿Puedo manejar el fiado?', 'Sí. El módulo de cartera guarda cuánto debe cada cliente y desde cuándo, y recibe abonos parciales. Se acabaron las hojas sueltas del cuaderno.'],
  ['¿Puedo tener varias cajas vendiendo al tiempo?', 'Sí. Cada caja abre y cierra su propio turno, con su arqueo por medio de pago. El administrador ve todas las cajas y el historial de turnos.'],
  ['¿Para qué negocios sirve?', 'Para cualquier negocio con mostrador y caja: tiendas de barrio, minimercados, graneros, droguerías, panaderías, ferreterías, papelerías, licoreras, carnicerías y fruvers.'],
  ['¿Qué pasa con mis datos si dejo de usarlo?', 'Son tuyos. Antes de cancelar puedes pedir la exportación de tus productos, clientes y ventas.'],
];

export const contactHref = SITE.whatsapp
  ? `https://wa.me/${SITE.whatsapp}`
  : `mailto:${SITE.email}`;
