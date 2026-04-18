import type { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Orthopédie',
    slug: 'orthopedie',
    description: 'Prothèses et implants pour la chirurgie orthopédique',
    icon: 'Bone'
  },
  {
    id: '2',
    name: 'Traumatologie',
    slug: 'traumatologie',
    description: 'Plaques, vis et fixateurs pour la chirurgie traumatologique',
    icon: 'Activity'
  }
];

export const products: Product[] = [
  // Orthopédie - Prothèses de hanche
  {
    id: 'ortho-001',
    name: 'Prothèse Totale de Hanche DBC-HIP-2000',
    description: 'Prothèse totale de hanche cimentée avec cupule acétabulaire et tige fémorale.',
    fullDescription: 'La prothèse totale de hanche DBC-HIP-2000 représente notre solution premium pour le remplacement articulaire. Conçue avec des matériaux biocompatibles de dernière génération, elle offre une durabilité exceptionnelle et une mobilité naturelle. La cupule acétabulaire en polyéthylène haute densité associée à la tige fémorale en titane grade 5 assure une fixation optimale et une longévité accrue.',
    category: 'orthopedie',
    subcategory: 'Prothèses de hanche',
    images: ['/products/hip-prosthesis-1.jpg', '/products/hip-prosthesis-2.jpg'],
    specifications: {
      'Matériau cupule': 'Polyéthylène HXLPE',
      'Matériau tige': 'Titane Ti-6Al-4V',
      'Diamètres disponibles': '44mm - 58mm',
      'Longueurs tige': '120mm - 180mm',
      'Angle CCD': '126°, 135°',
      'Ciment': 'Oui (PMMA)'
    },
    features: [
      'Design anatomique optimisé',
      'Surface poreuse pour l\'ostéointégration',
      'Résistance à l\'usure supérieure',
      'Stabilité rotatoire améliorée',
      'Compatible avec tous les approches chirurgicales'
    ],
    featured: true
  },
  {
    id: 'ortho-002',
    name: 'Prothèse de Hanche Non Cimentée DBC-HIP-NC',
    description: 'Prothèse totale de hanche non cimentée avec fixation biologique.',
    fullDescription: 'La prothèse DBC-HIP-NC est spécialement conçue pour les patients jeunes et actifs nécessitant une solution durable sans ciment. Sa surface poreuse hautement texturée favorise une ostéointégration rapide et stable.',
    category: 'orthopedie',
    subcategory: 'Prothèses de hanche',
    images: ['/products/hip-nc-1.jpg'],
    specifications: {
      'Matériau': 'Titane poreux + céramique',
      'Surface': 'Poreuse 3D',
      'Diamètres': '46mm - 60mm',
      'Revêtement': 'Hydroxyapatite'
    },
    features: [
      'Fixation biologique',
      'Idéale pour patients < 60 ans',
      'Révision facilitée',
      'Basse liberation de débris'
    ],
    featured: false
  },
  // Orthopédie - Prothèses de genou
  {
    id: 'ortho-003',
    name: 'Prothèse Totale de Genou DBC-KNEE-3000',
    description: 'Prothèse tricompartimentale de genou avec insert mobile.',
    fullDescription: 'La prothèse DBC-KNEE-3000 offre une cinématique naturelle du genou grâce à son design anatomique et son insert mobile. Le système de glissement optimisé reproduit fidèlement le mouvement du genou naturel.',
    category: 'orthopedie',
    subcategory: 'Prothèses de genou',
    images: ['/products/knee-prosthesis-1.jpg', '/products/knee-prosthesis-2.jpg'],
    specifications: {
      'Type': 'Tricompartimentale',
      'Insert': 'Polyéthylène mobile',
      'Fémoral': 'Cobalt-chrome',
      'Tibial': 'Titane',
      'Tailles': '1-6 (S-XXL)',
      'Rotulien': 'Optionnel'
    },
    features: [
      'Cinématique naturelle',
      'Stabilité en flexion',
      'Mobilité rotatoire',
      'Durabilité prouvée > 15 ans'
    ],
    featured: true
  },
  {
    id: 'ortho-004',
    name: 'Prothèse Unicompartimentale DBC-UNI-KNEE',
    description: 'Prothèse unicompartimentale médiale ou latérale.',
    fullDescription: 'Solution conservatrice pour l\'arthrose localisée d\'un seul compartiment du genou. Préserve les ligaments croisés et permet une récupération rapide.',
    category: 'orthopedie',
    subcategory: 'Prothèses de genou',
    images: ['/products/uni-knee-1.jpg'],
    specifications: {
      'Compartiments': 'Médial ou Latéral',
      'Fixation': 'Cimentée',
      'Matériau': 'Cobalt-chrome / PE',
      'Instruments': 'Patient-specific option'
    },
    features: [
      'Chirurgie mini-invasive',
      'Récupération rapide',
      'Sensation naturelle',
      'Révision facilitée'
    ],
    featured: false
  },
  // Orthopédie - Épaule
  {
    id: 'ortho-005',
    name: 'Prothèse d\'Épaule DBC-SHOULDER',
    description: 'Prothèse totale d\'épaule anatomique ou inversée.',
    fullDescription: 'Système modulaire d\'épaule offrant à la fois les configurations anatomiques et inversées. Adapté aux arthroplasties primaires et de révision.',
    category: 'orthopedie',
    subcategory: 'Prothèses d\'épaule',
    images: ['/products/shoulder-1.jpg'],
    specifications: {
      'Types': 'Anatomique / Inversée',
      'Tige': 'Cimentée ou non',
      'Glenoïde': 'Polyéthylène ou métal',
      'Huméral': 'Titane ou céramique'
    },
    features: [
      'Système modulaire',
      'Stabilité optimale',
      'Range de mouvement complet',
      'Technique chirurgicale simplifiée'
    ],
    featured: false
  },
  // Traumatologie - Plaques
  {
    id: 'traum-001',
    name: 'Plaque de Compression DBC-PLATE-LC',
    description: 'Plaque de compression large pour fémur et tibia.',
    fullDescription: 'Plaque de compression large en titane grade 5, conçue pour la fixation stable des fractures diaphyssaires du fémur et du tibia. Système de verrouillage à angle variable disponible.',
    category: 'traumatologie',
    subcategory: 'Plaques',
    images: ['/products/plate-lc-1.jpg', '/products/plate-lc-2.jpg'],
    specifications: {
      'Matériau': 'Titane Ti-6Al-4V',
      'Longueurs': '4 à 20 trous',
      'Épaisseur': '4.5mm',
      'Largeur': '14mm',
      'Pas': '12mm',
      'Verrouillage': 'Oui (optionnel)'
    },
    features: [
      'Résistance mécanique élevée',
      'Profil bas',
      'Système de compression dynamique',
      'Compatible IRM',
      'Anatomique précontournée'
    ],
    featured: true
  },
  {
    id: 'traum-002',
    name: 'Plaque de Compression Small DBC-PLATE-SC',
    description: 'Plaque de compression pour radius, cubitus et clavicule.',
    fullDescription: 'Plaque de compression small pour la fixation des fractures des os longs du membre supérieur. Design profilé pour une adaptation anatomique optimale.',
    category: 'traumatologie',
    subcategory: 'Plaques',
    images: ['/products/plate-sc-1.jpg'],
    specifications: {
      'Matériau': 'Titane ou Inox',
      'Longueurs': '3 à 12 trous',
      'Épaisseur': '2.7mm',
      'Largeur': '8mm',
      'Pas': '8mm'
    },
    features: [
      'Profil ultra-bas',
      'Flexibilité optimale',
      'Réduction précise',
      'Minimisation du tissu mou'
    ],
    featured: false
  },
  {
    id: 'traum-003',
    name: 'Plaque Reconstruction DBC-PLATE-RECO',
    description: 'Plaque de reconstruction 3.5mm pour fractures complexes.',
    fullDescription: 'Plaque de reconstruction polyvalente permettant un contour personnalisé pour s\'adapter aux anatomies complexes. Idéale pour les fractures péliennes et des os plats.',
    category: 'traumatologie',
    subcategory: 'Plaques',
    images: ['/products/plate-reco-1.jpg'],
    specifications: {
      'Matériau': 'Titane',
      'Épaisseur': '3.5mm',
      'Longueurs': '4 à 16 trous',
      'Moulable': 'Oui',
      'Trous': 'Combiholes'
    },
    features: [
      'Contour personnalisable',
      'Trous combiholes universels',
      'Stabilité multidirectionnelle',
      'Idéale pelvis/omoplate'
    ],
    featured: false
  },
  // Traumatologie - Vis
  {
    id: 'traum-004',
    name: 'Vis Cancellous DBC-SCREW-CAN',
    description: 'Vis spongieuses 6.5mm pour métaphyse.',
    fullDescription: 'Vis spongieuses auto-taraudeuses pour la fixation des fractures métaphysaires. Filetage large pour une prise optimale dans l\'os spongieux.',
    category: 'traumatologie',
    subcategory: 'Vis',
    images: ['/products/screw-can-1.jpg'],
    specifications: {
      'Diamètre': '6.5mm',
      'Longueurs': '25mm - 110mm',
      'Filetage': '16mm',
      'Tête': 'Hexagonale 3.5mm',
      'Matériau': 'Titane'
    },
    features: [
      'Auto-taraudeuse',
      'Prise optimale',
      'Tête hexagonale standard',
      'Filetage profilé'
    ],
    featured: false
  },
  {
    id: 'traum-005',
    name: 'Vis Corticale DBC-SCREW-CORT',
    description: 'Vis corticales 4.5mm pour diaphyse.',
    fullDescription: 'Vis corticales pour la fixation des fractures diaphyssaires. Filetage fin pour une fixation précise dans l\'os cortical.',
    category: 'traumatologie',
    subcategory: 'Vis',
    images: ['/products/screw-cort-1.jpg'],
    specifications: {
      'Diamètre': '4.5mm',
      'Longueurs': '20mm - 80mm',
      'Filetage': '1.75mm de pas',
      'Tête': 'Hexagonale 2.5mm',
      'Matériau': 'Titane ou Inox'
    },
    features: [
      'Pas fin pour cortical',
      'Auto-taraudeuse',
      'Résistance à la traction',
      'Biocompatibilité'
    ],
    featured: false
  },
  {
    id: 'traum-006',
    name: 'Vis à Canule DBC-SCREW-CANUL',
    description: 'Vis à canule 7.0mm pour ostéosynthèse guidée.',
    fullDescription: 'Vis à canule pour fixation guidée des fractures. Le canal central permet le passage du fil guide pour un positionnement précis.',
    category: 'traumatologie',
    subcategory: 'Vis',
    images: ['/products/screw-canul-1.jpg'],
    specifications: {
      'Diamètre extérieur': '7.0mm',
      'Diamètre canal': '2.0mm',
      'Longueurs': '40mm - 120mm',
      'Tête': 'Fraisée hexagonale',
      'Matériau': 'Titane'
    },
    features: [
      'Fixation guidée',
      'Positionnement précis',
      'Réduction percutanée',
      'Minimalement invasive'
    ],
    featured: true
  },
  // Traumatologie - Fixateurs externes
  {
    id: 'traum-007',
    name: 'Fixateur Externe DBC-EXT-FIX',
    description: 'Système de fixateur externe monoplan.',
    fullDescription: 'Système de fixateur externe modulaire pour la stabilisation temporaire ou définitive des fractures. Configuration monoplan stable et rigide.',
    category: 'traumatologie',
    subcategory: 'Fixateurs externes',
    images: ['/products/ext-fix-1.jpg', '/products/ext-fix-2.jpg'],
    specifications: {
      'Barres': 'Titane ou Carbone',
      'Longueur barres': '100mm - 400mm',
      'Broches': '3.0mm - 6.0mm',
      'Connecteurs': 'Aluminium anodisé',
      'Type': 'Monoplan / Multiplan'
    },
    features: [
      'Modularité complète',
      'Stabilité rigide',
      'Ajustement facile',
      'Radiotransparent (option carbone)',
      'Léger et résistant'
    ],
    featured: true
  },
  {
    id: 'traum-008',
    name: 'Fixateur Externe Circular DBC-EXT-CIRC',
    description: 'Fixateur externe circulaire type Ilizarov.',
    fullDescription: 'Fixateur externe circulaire pour l\'ostéosynthèse complexe, l\'allongement osseux et les déformations. Système complet avec anneaux et fils de tension.',
    category: 'traumatologie',
    subcategory: 'Fixateurs externes',
    images: ['/products/ext-circ-1.jpg'],
    specifications: {
      'Anneaux': 'Aluminium / Carbone',
      'Diamètres': '80mm - 240mm',
      'Fils': '1.5mm - 2.0mm',
      'Tension': 'Jusqu\'à 150kg',
      'Connecteurs': 'Télescopiques'
    },
    features: [
      'Stabilité circulaire',
      'Allongement osseux',
      'Correction déformations',
      'Charge totale autorisée',
      'Radiographie facilitée'
    ],
    featured: false
  },
  // Traumatologie - Clous
  {
    id: 'traum-009',
    name: 'Clou Intramédullaire DBC-NAIL-TIB',
    description: 'Clou intramédullaire verrouillé pour tibia.',
    fullDescription: 'Clou intramédullaire verrouillé pour la fixation des fractures diaphyssaires du tibia. Design cannulé pour insertion guidée.',
    category: 'traumatologie',
    subcategory: 'Clous',
    images: ['/products/nail-tib-1.jpg'],
    specifications: {
      'Diamètres': '8mm - 13mm',
      'Longueurs': '240mm - 420mm',
      'Verrouillage': 'Proximal et distal',
      'Matériau': 'Titane',
      'Courbure': 'Anatomique 11°'
    },
    features: [
      'Stabilité rotatoire',
      'Verrouillage bidirectionnel',
      'Insertion guidée',
      'Anatomique préformé',
      'Biomécanique optimale'
    ],
    featured: false
  },
  {
    id: 'traum-010',
    name: 'Clou Intramédullaire DBC-NAIL-FEM',
    description: 'Clou intramédullaire verrouillé pour fémur.',
    fullDescription: 'Clou intramédullaire verrouillé pour la fixation des fractures du fémur. Design avec courbure anatomique et options de verrouillage multiples.',
    category: 'traumatologie',
    subcategory: 'Clous',
    images: ['/products/nail-fem-1.jpg'],
    specifications: {
      'Diamètres': '9mm - 15mm',
      'Longueurs': '280mm - 480mm',
      'Verrouillage': 'Multi-angles',
      'Matériau': 'Titane',
      'Courbure': 'Anatomique 10°'
    },
    features: [
      'Verrouillage multi-angles',
      'Stabilité maximale',
      'Anatomie fémorale',
      'Insertion antégrade/rétrograde',
      'Réduction indirecte'
    ],
    featured: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getProductsByCategory = (category: 'orthopedie' | 'traumatologie'): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getSubcategories = (category: 'orthopedie' | 'traumatologie'): string[] => {
  const subcats = new Set(products.filter(p => p.category === category).map(p => p.subcategory));
  return Array.from(subcats);
};
