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

export const contactHref = SITE.whatsapp
  ? `https://wa.me/${SITE.whatsapp}`
  : `mailto:${SITE.email}`;
