export interface Product {
  id: string;
  numericId: number;
  name: string;
  category: 'collares' | 'pulseras' | 'aretes' | 'anillos' | 'sets';
  categoryLabel: string;
  price: number;
  badge?: 'BESTSELLER' | 'TENDENCIA' | 'NUEVO' | 'EXCLUSIVO' | '';
  subtitle: string;
  specification: string;
  description: string;
  image: string;
  cloudinaryUrl: string;
  insetDetail: string;
  features: string[];
}

export const PHONE_NUMBER = '51986492712';
export const WHATSAPP_NUMBER = PHONE_NUMBER;

export const PRODUCTS: Product[] = [
  // ─── COLLARES (5) ────────────────────────────────────────────────────────
  {
    id: 'collar-snake',
    numericId: 0,
    name: 'Collar Snake',
    category: 'collares',
    categoryLabel: 'Collares',
    price: 49,
    badge: 'BESTSELLER',
    subtitle: 'Collares · Enchapado en Oro 18k PVD',
    specification: '40 cm + 6 cm de extensor',
    description:
      'Malla tubular flexible con caída líquida y brillo tipo espejo. Medida: 40 cm + 6 cm de extensor. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/collar_snake.jpg',
    cloudinaryUrl: 'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168330/aa.jpg',
    insetDetail: '/assets/products/collar_snake.jpg',
    features: [
      'Medida: 40 cm + 6 cm de extensor',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: resistente a ducha, mar y piscina',
      'Hipoalergénico, apto para pieles sensibles',
    ],
  },
  {
    id: 'collar-belle-chocker',
    numericId: 1,
    name: 'Collar Belle Chocker',
    category: 'collares',
    categoryLabel: 'Collares',
    price: 52,
    badge: 'TENDENCIA',
    subtitle: 'Collares · Enchapado en Oro 18k PVD',
    specification: 'Gargantilla adaptable',
    description:
      'Gargantilla rígida flexible con terminación pulida de alto impacto. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/collar_belle_chocker.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168603/Collar_dorado_con_detalle_de_pulsera.png',
    insetDetail: '/assets/products/collar_belle_chocker.png',
    features: [
      'Medida: gargantilla adaptable',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: resistente a ducha, mar y piscina',
      'Hipoalergénico, apto para pieles sensibles',
    ],
  },
  {
    id: 'jhuliett',
    numericId: 2,
    name: 'Jhuliett',
    category: 'collares',
    categoryLabel: 'Collares',
    price: 45,
    badge: 'NUEVO',
    subtitle: 'Collares · Enchapado en Oro 18k PVD',
    specification: '40 cm + 6 cm de extensor',
    description:
      'Diseño Jhuliett delicado y sofisticado con caída fina y brillo radiante. Medida: 40 cm + 6 cm de extensor. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/jhuliett.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028308/430efdcb-39cd-4ce0-959a-e7fac72ea220.png',
    insetDetail: '/assets/products/jhuliett.png',
    features: [
      'Medida: 40 cm + 6 cm de extensor',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: resistente a ducha, mar y piscina',
    ],
  },
  {
    id: 'collar-lazos-de-amor',
    numericId: 4,
    name: 'Collar Lazos de Amor',
    category: 'collares',
    categoryLabel: 'Collares',
    price: 65,
    badge: 'NUEVO',
    subtitle: 'Collares · Enchapado en Oro 18k PVD',
    specification: 'Diseño exclusivo Lazos de Amor',
    description:
      'Diseño refinado de lazos entrelazados con caída delicada y brillo dorado radiante. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/collar_lazos_de_amor.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028314/804de4e5-51b5-4aef-ad7b-2d55c57831b1.png',
    insetDetail: '/assets/products/collar_lazos_de_amor.png',
    features: [
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: resistente a ducha, mar y piscina',
      'Hipoalergénico, apto para pieles sensibles',
      'Diseño exclusivo Lazos de Amor',
    ],
  },

  // ─── PULSERAS (4) ────────────────────────────────────────────────────────
  {
    id: 'pulsera-fine-beour',
    numericId: 5,
    name: 'Pulsera Fine Beour',
    category: 'pulseras',
    categoryLabel: 'Pulseras',
    price: 50,
    badge: 'BESTSELLER',
    subtitle: 'Pulseras · Enchapado en Oro 18k PVD',
    specification: '16 cm + 6 cm de extensor',
    description:
      'Diseño refinado de eslabones pulidos con caída suave y cierre seguro. Medida: 16 cm + 6 cm de extensor. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/pulsera_fine_beour.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030054/60beb4dd-aa17-4d7c-af7b-9de8dd3f0be4.png',
    insetDetail: '/assets/products/pulsera_fine_beour.png',
    features: [
      'Medida: 16 cm + 6 cm de extensor',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: resistente a ducha, mar y piscina',
      'Hipoalergénica, apta para pieles sensibles',
    ],
  },
  {
    id: 'pulsera-choker',
    numericId: 6,
    name: 'Pulsera Choker',
    category: 'pulseras',
    categoryLabel: 'Pulseras',
    price: 45,
    badge: 'TENDENCIA',
    subtitle: 'Pulseras · Enchapado en Oro 18k PVD',
    specification: 'Estructura adaptable',
    description:
      'Pulsera de estructura moderna combinable en set con el Collar Belle. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/pulsera_choker.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168757/Collar_y_pulsera_dorados_en_detalle.png',
    insetDetail: '/assets/products/pulsera_choker.png',
    features: [
      'Medida: estructura adaptable',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: resistente a ducha, mar y piscina',
      'Hipoalergénica, apta para pieles sensibles',
    ],
  },
  {
    id: 'romantic-stile',
    numericId: 7,
    name: 'Romantic Stile',
    category: 'pulseras',
    categoryLabel: 'Pulseras',
    price: 54,
    badge: 'NUEVO',
    subtitle: 'Pulseras · Enchapado en Oro 18k PVD',
    specification: 'Eslabones delicados',
    description:
      'Eslabones delicados con espíritu romántico y acabado dorado radiante. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/romantic_stile.jpg',
    cloudinaryUrl: 'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168790/5.jpg',
    insetDetail: '/assets/products/romantic_stile.jpg',
    features: [
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: resistente a ducha, mar y piscina',
      'Hipoalergénica, apta para pieles sensibles',
      'Acabado pulido de alta duración',
    ],
  },
  {
    id: 'eslabones-de-color',
    numericId: 8,
    name: 'Eslabones de color',
    category: 'pulseras',
    categoryLabel: 'Pulseras',
    price: 60,
    badge: 'EXCLUSIVO',
    subtitle: 'Pulseras · Enchapado en Oro 18k PVD',
    specification: 'Eslabones dorados con color',
    description:
      'Cadena de eslabones dorados realzados con detalles de color sofisticados. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/eslabones_de_color.jpg',
    cloudinaryUrl: 'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168843/7.jpg',
    insetDetail: '/assets/products/eslabones_de_color.jpg',
    features: [
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: no se despinta ni oxida',
      'Hipoalergénica, apta para pieles sensibles',
      'Diseño moderno y versátil',
    ],
  },

  // ─── ARETES (4) ──────────────────────────────────────────────────────────
  {
    id: 'aretes-mana',
    numericId: 9,
    name: 'Aretes Mana',
    category: 'aretes',
    categoryLabel: 'Aretes',
    price: 35,
    badge: 'BESTSELLER',
    subtitle: 'Aretes · Enchapado en Oro 18k PVD',
    specification: 'Medida: 1 – 1.2 cm (par)',
    description:
      'Argollitas clásicas de ajuste cómodo y brillo dorado cálido para uso 24/7. Medida: 1 – 1.2 cm (primer arete). Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/aretes_mana.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168070/Oreja_con_aro_dorado.png',
    insetDetail: '/assets/products/aretes_mana.png',
    features: [
      'Medida: 1 – 1.2 cm (primer arete)',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: duérmete y báñate con ellos',
      'Hipoalergénicos, aptos para orejas sensibles',
    ],
  },
  {
    id: 'aretes-finas-gold',
    numericId: 10,
    name: 'Aretes Finas Gold',
    category: 'aretes',
    categoryLabel: 'Aretes',
    price: 35,
    badge: 'TENDENCIA',
    subtitle: 'Aretes · Enchapado en Oro 18k PVD',
    specification: 'Medida: 5.50 cm (par)',
    description:
      'Arracadas largas y estilizadas que aportan luz y elegancia al rostro. Medida: 5.50 cm. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/aretes_finas_gold.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792067947/9372f6cf-1c01-49ff-9a5e-51299e119a87.png',
    insetDetail: '/assets/products/aretes_finas_gold.png',
    features: [
      'Medida: 5.50 cm',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: no pierden su color dorado',
      'Ligeros y confortables todo el día',
    ],
  },
  {
    id: 'pack-aretes-petite',
    numericId: 11,
    name: 'Pack Aretes Petite',
    category: 'aretes',
    categoryLabel: 'Aretes',
    price: 65,
    badge: 'NUEVO',
    subtitle: 'Aretes · Enchapado en Oro 18k PVD',
    specification: 'Set de 3 pares',
    description:
      'Set de 3 pares de aretes minimalistas perfectos para múltiples perforaciones. Precio del pack S/ 65 (c/u S/ 25). Medidas: 0.38 cm · 0.6 cm · 1.01 cm. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/pack_aretes_petite.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030578/Tres_pares_de_aretes_dorados_elegantes.png',
    insetDetail: '/assets/products/pack_aretes_petite.png',
    features: [
      'Contenido: Set de 3 pares (precio individual S/ 25 c/u)',
      'Medidas: 0.38 cm · 0.6 cm · 1.01 cm',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof e hipoalergénicos',
    ],
  },
  {
    id: 'gala',
    numericId: 12,
    name: 'Gala',
    category: 'aretes',
    categoryLabel: 'Aretes',
    price: 46,
    badge: 'EXCLUSIVO',
    subtitle: 'Aretes · Enchapado en Oro 18k PVD',
    specification: 'Diseño fiesta o gala (par)',
    description:
      'Aretes dorados de diseño fluido y presencia escultórica ideales para ocasiones especiales. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/aretes_gala.png',
    cloudinaryUrl: 'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168948/443.png',
    insetDetail: '/assets/products/aretes_gala.png',
    features: [
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: resistente a ducha y sudor',
      'Hipoalergénicos, aptos para pieles sensibles',
      'Diseño sofisticado para fiesta o gala',
    ],
  },

  // ─── ANILLOS (2) ─────────────────────────────────────────────────────────
  {
    id: 'anillo-ondas',
    numericId: 13,
    name: 'Anillo Ondas',
    category: 'anillos',
    categoryLabel: 'Anillos',
    price: 43,
    badge: 'BESTSELLER',
    subtitle: 'Anillos · Enchapado en Oro 18k PVD',
    specification: 'Regulable (se adapta a tu dedo)',
    description:
      'Silueta ondulada moderna que envuelve el dedo con delicadeza. Medida: regulable. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/anillo_ondas.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030263/ec12ae98-cef8-4083-9d72-787f9389f1c9.png',
    insetDetail: '/assets/products/anillo_ondas.png',
    features: [
      'Medida: regulable (se adapta a tu dedo)',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: el color no se va',
      'Hipoalergénica, apta para pieles sensibles',
    ],
  },
  {
    id: 'anillo-eterno',
    numericId: 14,
    name: 'Anillo Eterno',
    category: 'anillos',
    categoryLabel: 'Anillos',
    price: 45,
    badge: 'TENDENCIA',
    subtitle: 'Anillos · Enchapado en Oro 18k PVD',
    specification: 'Regulable (se adapta a tu dedo)',
    description:
      'Banda continua dorada con acabado pulido y presencia sutil. Medida: regulable. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/anillo_eterno.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030262/03b1a7e1-9f51-4498-8e50-61fd0c915e3d.png',
    insetDetail: '/assets/products/anillo_eterno.png',
    features: [
      'Medida: regulable (se adapta a tu dedo)',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: el color no se va',
      'Hipoalergénica, apta para pieles sensibles',
    ],
  },

  // ─── SETS (1) ────────────────────────────────────────────────────────────
  {
    id: 'set-collar-belle-chocker',
    numericId: 15,
    name: 'Collar Belle Chocker',
    category: 'sets',
    categoryLabel: 'Sets',
    price: 52,
    badge: 'EXCLUSIVO',
    subtitle: 'Sets · Enchapado en Oro 18k PVD',
    specification: 'Gargantilla adaptable',
    description:
      'Gargantilla rígida flexible con terminación pulida de alto impacto. Acero inoxidable 316L · Enchapado en Oro 18k PVD.',
    image: '/assets/products/collar_belle_chocker.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168603/Collar_dorado_con_detalle_de_pulsera.png',
    insetDetail: '/assets/products/collar_belle_chocker.png',
    features: [
      'Medida: gargantilla adaptable',
      'Acero inoxidable 316L · Enchapado en Oro 18k PVD',
      '100% waterproof: resistente a ducha, mar y piscina',
      'Hipoalergénico, apto para pieles sensibles',
    ],
  },
];
