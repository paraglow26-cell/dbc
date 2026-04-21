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
  },
  {
    id: '3',
    name: 'Équipements Médicaux',
    slug: 'equipements',
    description: 'Équipements de bloc opératoire et mobilier médical',
    icon: 'Monitor'
  },
  {
    id: '4',
    name: 'Consommables',
    slug: 'consommables',
    description: 'Matériel à usage unique, pansements et accessoires stériles',
    icon: 'Stethoscope'
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
    images: ['https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1583454110331-576bbf1cdd0a?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1559757175-5700dac335bc?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'],
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
    images: ['https://images.unsplash.com/photo-1583454110331-576bbf1cdd0a?auto=format&fit=crop&q=80&w=800'],
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
  },
  // Équipements Médicaux
  {
    id: 'eq-001',
    name: 'Table d\'Opération Universelle DBC-TECH-100',
    description: 'Table d\'opération hydraulique polyvalente pour bloc opératoire.',
    fullDescription: 'La table d\'opération DBC-TECH-100 est conçue pour supporter une large gamme de procédures chirurgicales. Son système hydraulique robuste permet des ajustements précis en hauteur, inclinaison et Trendelenburg. Sa base en acier inoxydable et son plateau radiotransparent en font un outil indispensable pour le bloc opératoire moderne.',
    category: 'equipements',
    subcategory: 'Mobilier de bloc',
    images: ['https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Capacité max': '250 kg',
      'Plage de hauteur': '750mm - 1050mm',
      'Inclinaison latérale': '±20°',
      'Trendelenburg': '±30°',
      'Matériau': 'Acier Inox / Fibre de carbone'
    },
    features: [
      'Commande hydraulique au pied',
      'Plateau radiotransparent compatible amplificateur',
      'Matelas à mémoire de forme antistatique',
      'Base mobile avec frein centralisé',
      'Modularité pour différentes spécialités'
    ],
    featured: true
  },
  {
    id: 'eq-002',
    name: 'Éclairage Opératoire LED DBC-LIGHT-5',
    description: 'Scialytique LED haute performance avec tête unique régulable.',
    fullDescription: 'Système d\'éclairage opératoire LED offrant une luminosité exceptionnelle et une restitution fidèle des couleurs (CRI 95+). Conçu pour minimiser les ombres portées et réduire la chaleur dégagée sur le champ opératoire.',
    category: 'equipements',
    subcategory: 'Éclairage',
    images: ['https://images.unsplash.com/photo-1579154235821-396553246416?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Intensité lumineuse': '160,000 Lux',
      'Température de couleur': '4500K / adjustable',
      'Diamètre du champ': '150 - 300 mm',
      'Durée de vie LED': '> 50,000 h'
    },
    features: [
      'Technologie LED froide',
      'Variation d\'intensité continue',
      'Design aérodynamique',
      'Contrôle tactile intégré'
    ],
    featured: false
  },
  // Consommables
  {
    id: 'cons-001',
    name: 'Gants de Chirurgie Stériles Sans Poudre',
    description: 'Gants chirurgicaux en latex haute sensibilité, stériles.',
    fullDescription: 'Gants de chirurgie en latex naturel, sans poudre, offrant une sensibilité tactile maximale et une excellente prise en main des instruments. Stérilisés par rayonnement Gamma.',
    category: 'consommables',
    subcategory: 'Protection',
    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Matériau': 'Latex naturel',
      'Conditionnement': 'Boîte de 50 paires',
      'Stérilisation': 'Gamma',
      'Norme': 'EN 455 1, 2, 3'
    },
    features: [
      'Sans poudre (réduit les allergies)',
      'Haute résistance à la perforation',
      'Forme anatomique main droite/gauche',
      'Manchette longue avec bord roulé'
    ],
    featured: true
  },
  {
    id: 'cons-002',
    name: 'Champ de Chirurgie Autocollant Fenêtré',
    description: 'Champ opératoire stérile à usage unique avec zone adhésive.',
    fullDescription: 'Champ de chirurgie jetable, imperméable et absorbant, avec fenêtre precouper et adhésif hypoallergénique pour une isolation parfaite du champ opératoire.',
    category: 'consommables',
    subcategory: 'Drapage',
    images: ['https://images.unsplash.com/photo-1583324113626-70df0f43aa2b?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Dimensions': '75 x 90 cm',
      'Fenêtre': '10 x 12 cm',
      'Matériau': 'SMS trilaminé',
      'Stérilité': 'Individuelle'
    },
    features: [
      'Barrière bactérienne totale',
      'Adhésif haute tenue',
      'Absorbe les fluides en surface',
      'Non-tissé confortable'
    ],
    featured: false
  },
  {
    id: 'eq-003',
    name: 'Amplificateur de Brillance Mobile (C-Arm)',
    description: 'Système d\'imagerie chirurgicale mobile haute résolution.',
    fullDescription: 'Amplificateur de brillance (C-Arm) de dernière génération pour l\'imagerie peropératoire. Offre une qualité d\'image supérieure avec une dose de radiation minimale pour le personnel et le patient.',
    category: 'equipements',
    subcategory: 'Imagerie',
    images: ['https://images.unsplash.com/photo-1579154236595-0153264663d2?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Générateur': '5 kW / 110 kV',
      'Capteur': 'Flat Panel Detector 21x21cm',
      'Mémoire': '50,000 images',
      'Écran': 'Double moniteur 19"'
    },
    features: [
      'Positionnement précis et fluide',
      'Traitement numérique de l\'image',
      'Interface utilisateur intuitive',
      'Connectivité DICOM complète'
    ],
    featured: true
  },
  {
    id: 'cons-003',
    name: 'Sutures Synthétiques Résorbables DBC-VIC',
    description: 'Sutures chirurgicales tressées résorbables avec aiguille.',
    fullDescription: 'Sutures synthétiques résorbables à base d\'acide polyglycolique. Offrent une excellente sécurité au nœud et une force de traction maintenue pendant la phase critique de cicatrisation.',
    category: 'consommables',
    subcategory: 'Sutures',
    images: ['https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800'],
    specifications: {
      'Type': 'Tressé résorbable',
      'Matériau': 'PGA (Acide Polyglycolique)',
      'Résorption': '60-90 jours',
      'Aiguille': 'Courbe 3/8 cercle, triangulaire'
    },
    features: [
      'Passage tissulaire doux',
      'Excellente tenue au nœud',
      'Réaction tissulaire minimale',
      'Stérilisation à l\'oxyde d\'éthylène'
    ],
    featured: false
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getProductsByCategory = (category: 'orthopedie' | 'traumatologie' | 'equipements' | 'consommables'): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getSubcategories = (category: 'orthopedie' | 'traumatologie' | 'equipements' | 'consommables'): string[] => {
  const subcats = new Set(products.filter(p => p.category === category).map(p => p.subcategory));
  return Array.from(subcats);
};
