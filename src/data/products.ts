import type { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'traum',
    name: 'Traumatologie',
    slug: 'traumatologie',
    description: 'Fixation interne, vis, plaques et clous intramédullaires',
    icon: 'Activity'
  },
  {
    id: 'arthro-m',
    name: 'Arthroscopie & Médecine Sportive',
    slug: 'arthroscopie',
    description: 'Réparation ligamentaire, tendineuse et méniscale',
    icon: 'Microscope'
  },
  {
    id: 'arthro-p',
    name: 'Arthroplastie',
    slug: 'arthroplastie',
    description: 'Prothèses totales de hanche, genou et épaule',
    icon: 'Bone'
  },
  {
    id: 'neuro',
    name: 'Neurochirurgie',
    slug: 'neurochirurgie',
    description: 'Implants rachidiens, cages intersomatiques et arthrodèse',
    icon: 'Cpu'
  },
  {
    id: 'thora',
    name: 'Chirurgie Thoracique',
    slug: 'thoracique',
    description: 'Implants sternaux et costaux, stabilisation mini-invasive',
    icon: 'Shield'
  },
  {
    id: 'conso',
    name: 'Consommable Médical',
    slug: 'consommables',
    description: 'Sets opératoires, drains, drapage stérile et accessoires',
    icon: 'Syringe'
  }
];

export const products: Product[] = [
  // FEATURED ROBOT
  {
    id: 'robot-001',
    name: 'Robot Chirurgical CUVIS JOINT',
    description: 'Système robotique de coupe de précision sub-millimétrique pour arthroplastie.',
    fullDescription: 'Le CUVIS JOINT de CUREXO est le système de robot chirurgical de coupe le plus avancé au monde pour le remplacement articulaire. Il permet une planification 3D basée sur CT-scan et une exécution automatique par fraisage avec une précision inégalée, garantissant un positionnement parfait de l\'implant et une récupération patient accélérée.',
    category: 'arthroplastie',
    subcategory: 'Robotique Chirurgicale',
    images: ['https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Fabricant': 'CUREXO (Corée)',
      'Classe': 'Classe 3 (Système automatisé)',
      'Planification': 'CT-Based (3D)',
      'Précision': 'Sub-millimétrique',
      'Axes Robot': '6 axes articulés',
      'Sécurité': 'Monitoring temps réel & arrêt d\'urgence'
    },
    features: [
      'Génération ultra-rapide du modèle osseux 3D',
      'Gap Check dynamique pré/intra/post opératoire',
      'Coupe automatique par fraisage haute performance',
      'Modification du plan possible en cours d\'intervention',
      'Réduction significative de l\'erreur humaine'
    ],
    featured: true
  },
  // Arthroplastie
  {
    id: 'arthro-p-001',
    name: 'Prothèse Totale de Hanche Permedica',
    description: 'Système d\'arthroplastie de hanche haute performance avec surfaces avancées.',
    fullDescription: 'Les solutions de hanche Permedica Orthopaedics offrent une large gamme de tiges et de cupules acétabulaires (cimentées et non cimentées) avec des technologies de surface favorisant l\'ostéointégration et la longévité.',
    category: 'arthroplastie',
    subcategory: 'Hanche',
    images: ['https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Origine': 'Italie (Permedica)',
      'Matériau': 'Titane haute pureté / Cobalt-Chrome',
      'Insert': 'Polyéthylène HXLPE',
      'Fixation': 'Press-fit ou Cimentée',
      'Certifications': 'CE, ISO 13485'
    },
    features: [
      'Design anatomique pour stabilité optimale',
      'Surfaces bio-actives pour intégration osseuse rapide',
      'Options modulaires pour anatomies complexes',
      'Usure minimale des composants'
    ],
    featured: true
  },
  // Traumatologie
  {
    id: 'traum-001',
    name: 'Système de Plaques Verrouillées Traumatologie',
    description: 'Plaques et vis de fixation interne pour fractures complexes.',
    fullDescription: 'Gamme complète de plaques anatomiques pré-contournées et vis de verrouillage pour la traumatologie des membres supérieurs et inférieurs. Matériaux haute résistance pour une stabilisation rigide.',
    category: 'traumatologie',
    subcategory: 'Fixation Interne',
    images: ['https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Matériau': 'Titane Grade 5 / Inox Médical',
      'Type': 'Plaques à profil bas',
      'Verrouillage': 'Vis verrouillées à angle stable',
      'Compatibilité': 'Compatible IRM'
    },
    features: [
      'Instrumentation simple et précise',
      'Profilés anatomiques réduisant l\'irritation des tissus',
      'Stabilité multi-directionnelle',
      'Large choix de longueurs et configurations'
    ],
    featured: true
  },
  // Neurochirurgie
  {
    id: 'neuro-001',
    name: 'Cages Intersomatiques & Vis Pédiculaires',
    description: 'Solutions d\'arthrodèse rachidienne et implants pour la colonne vertébrale.',
    fullDescription: 'Système complet pour la neurochirurgie du rachis incluant des cages intersomatiques en PEEK ou Titane poreux et des vis pédiculaires haute performance pour la stabilisation vertébrale.',
    category: 'neurochirurgie',
    subcategory: 'Implants Rachidiens',
    images: ['https://images.unsplash.com/photo-1454165833267-0240d2a45d94?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Application': 'Cervicale, Thoracique, Lombaire',
      'Matériaux': 'PEEK-OPTIMA / Titane 3D',
      'Fixation': 'Vis auto-taraudeuses'
    },
    features: [
      'Excellente visibilité radiologique',
      'Stabilité primaire immédiate',
      'Design favorisant la fusion osseuse',
      'Instrumentation ergonomique'
    ],
    featured: false
  },
  // Thoracique
  {
    id: 'thora-001',
    name: 'Système de Stabilisation Costale STRATOS',
    description: 'Implants sternaux et costaux pour la reconstruction thoracique.',
    fullDescription: 'Le système STRATOS offre des agrafes et barres de stabilisation pour les fractures de côtes et les reconstructions du sternum après traumatisme ou chirurgie lourde.',
    category: 'thoracique',
    subcategory: 'Ostéosynthèse Thoracique',
    images: ['https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Matériau': 'Titane pur',
      'Type': 'Barres malléables',
      'Fixation': 'Agrafage sans vis (optionnel)',
      'Technique': 'Mini-invasive'
    },
    features: [
      'Respecte la dynamique respiratoire',
      'Reconstruction anatomique précise',
      'Pose rapide et sécurisée',
      'Biocompatibilité totale'
    ],
    featured: false
  },
  // Arthroscopie
  {
    id: 'arthro-m-001',
    name: 'Ancres de Réparation Ligamentaire',
    description: 'Implants pour la médecine sportive, réparation des ligaments et tendons.',
    fullDescription: 'Gamme complète d\'ancres résorbables et non-résorbables pour la chirurgie arthroscopique de l\'épaule et du genou (coiffe des rotateurs, LCA, ménisque).',
    category: 'arthroscopie',
    subcategory: 'Médecine Sportive',
    images: ['https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Type': 'Ancres chargées de fils',
      'Matériau': 'PEEK / Biopolymère résorbable',
      'Diamètres': '2.8mm - 5.5mm'
    },
    features: [
      'Haute résistance à l\'arrachement',
      'Insertion simplifiée',
      'Réaction inflammatoire minimale'
    ],
    featured: false
  },
  // Consommable
  {
    id: 'conso-001',
    name: 'Sets Opératoires & Drapage Stérile',
    description: 'Accessoires de bloc opératoire et drapage haute protection.',
    fullDescription: 'Ensembles complets de drapage stérile, sets opératoires spécifiques par type de chirurgie et accessoires de protection pour garantir un environnement stérile optimal.',
    category: 'consommables',
    subcategory: 'Bloc Opératoire',
    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Matière': 'SMS multi-couches / Polyéthylène',
      'Stérilisation': 'Oxyde d\'Ethylène',
      'Conformité': 'EN 13795'
    },
    features: [
      'Imperméabilité totale aux fluides',
      'Barrière bactérienne certifiée',
      'Confort et respirabilité pour le personnel',
      'Large choix de tailles et formes'
    ],
    featured: false
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getSubcategories = (category: string): string[] => {
  const subcats = new Set(products.filter(p => p.category === category).map(p => p.subcategory));
  return Array.from(subcats);
};
