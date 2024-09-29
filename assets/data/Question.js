const questionsUniques = [
  {
    question:
      "Quel poisson issu des mers froides utilise-t-on pour faire des accras en Martinique ?",
    choices: ["La morue", "La dorade", "Le coulirou"],
    correctAnswer: "La morue",
  },

  {
    question: "Qu'est ce que le féroce ?",
    choices: [
      "Un adjectif",
      "Une boisson très alcoolisée",
      "Un plat à base d'avocat",
    ],
    correctAnswer: "Un plat à base d'avocat",
  },

  {
    question: "Qu'est qu'un bokit ?",
    choices: ["un sandwich", "Un kit de cuisine", "Un animal"],
    correctAnswer: "un sandwich",
  },

  {
    question: "Qu'est ce qu'un caca boeuf ?",
    choices: ["Des excréments frits", "Un fruit applatit", "Un gâteau"],
    correctAnswer: "Un gâteau",
  },

  {
    question: "C'est quoi un blaff ?",
    choices: [
      "Un plat de poisson",
      "Un plat à base de poulet",
      "Un désert copieux à la noix de coco",
    ],
    correctAnswer: "Un plat de poisson",
  },

  {
    question: "C'est quoi un dombré ?",
    choices: [
      "Un plat avec des boulettes de viande",
      "Un plat avec des boulettes de farine",
      "Un plat avec des testicules de taureau",
    ],
    correctAnswer: "Un plat avec des boulettes de farine",
  },

  {
    question: "Le mancelinier est un arbre innoffensif ?",
    choices: ["oui", "non"],
    correctAnswer: "non",
  },

  {
    question: "Finissez cette phrase: «Zouk la sé sel ...»",
    choices: ["Poivre et Girofle", "Medikamen nou ni", "Rimèd mwen ni"],
    correctAnswer: "Medikamen nou ni",
  },

  {
    question: " C'est quoi le «Chouval Bwa» ?",
    choices: [
      "Un sport hippique traditionnel en musique",
      "Un style musical qui accompagne un manège",
      "Un ancien musicien",
    ],
    correctAnswer: "Un style musical qui accompagne un manège",
  },

  {
    question: "Quand jouait-on habituellement du Gwoka en Guadeloupe ?",
    choices: [
      "Pour les fêtes",
      "Pour les enterrement",
      "Pour les soirées dansantes",
    ],
    correctAnswer: "Pour les enterrement",
  },

  {
    question: " C'est quoi «le bèlè» ?",
    choices: [
      "Une danse traditionnelle Martiniquaise",
      "Un Opéra de Martinique",
      "Un club de danse haïtien",
    ],
    correctAnswer: "Une danse traditionnelle Martiniquaise",
  },

  {
    question: "Quel est l'un des instruments joué le célèbre Eugène Mona ?",
    choices: ["Du piano", "Du triangle endiablé", "De la flûte en bambou"],
    correctAnswer: "De la flûte en bambou",
  },

  {
    question: "Qui interprète «La divinité» ?",
    choices: ["La Imperfecta", "La Perfecta", "Joris LARNOIR"],
    correctAnswer: "La Perfecta",
  },

  {
    question: "Quel groupe n'est pas originaire d'Haiti ?",
    choices: ["Kreyol la", "Zafem", "Les Aiglons", "Djet-X"],
    correctAnswer: "Les Aiglons",
  },

  {
    question: "Parmis les musiques suivantes laquelle n'est pas antillaise ?",
    choices: ["Raï", "Bouyon", "Jamaïque"],
    correctAnswer: "Raï",
  },

  {
    question: "Qui chante «Sans bikini sans monokini...» ?",
    choices: ["Fécat'Jy", "Edmonde Rusland", "Jid Kreyolad"],
    correctAnswer: "Fécat'Jy",
  },

  {
    question:
      "Quelle compétion inscrite au patrimoine immatériel de l'Unesco fait la fierté des Martiniquais ?",
    choices: ["Le tour des Yoles", "Le Tchimbé Raid", "La savane des esclaves"],
    correctAnswer: "Le tour des Yoles",
  },

  {
    question:
      "Quand a eu lieu l'éruption volcanique de la Pelée la plus connue ?",
    choices: ["22 Septembre 1920", "8 Mai 1902", "11 Novembre 1932"],
    correctAnswer: "8 Mai 1902",
  },

  {
    question: "Qui a réalisé «La Rue case nègre» ?",
    choices: ["Euzhan Palcy", "Aimé Césaire", "Frédéric Pichon"],
    correctAnswer: "Euzhan Palcy",
  },

  {
    question: "Qui a écrit «Le Diable dans un thé à la citronnelle» ?",
    choices: ["Joé dwet Filé", , "Gary Victor", "Alfred Marie Jeanne"],
    correctAnswer: "Gary Victor",
  },

  {
    question: "Quel fête se déroule habituellement en février les jours gras ?",
    choices: [
      "L'abolition de l'esclavage",
      "Le festival du crabe gras",
      "Le carnaval",
    ],
    correctAnswer: "Le carnaval",
  },

  {
    question:
      "Quelle communne de Martinique tire son nom d'un ancien animal marin qui vivait dans ses eaux ?",
    choices: ["Le phoque", "Le lamentin", "La Baleine à Bosse"],
    correctAnswer: "Le lamentin",
  },

  {
    question: "C'est quoi le Trigonocéphale ?",
    choices: [
      "Un poisson meurtrier",
      "Un serpent venimeux",
      "Un oiseau mangeur d'homme",
    ],
    correctAnswer: "Un serpent venimeux",
  },

  {
    question: "Quelle commune a été capitale de la Martinique ?",
    choices: ["Le Morne Rouge", "Le Lorrain", "Le Gros-Morne", "Saint-Pierre"],
    correctAnswer: "Saint-Pierre",
  },

  {
    question: "Qu'est ce qu'un dowliss ?",
    choices: ["Un chien", "Un esprit maléfique", "Un plat de résistance"],
    correctAnswer: "Un esprit maléfique",
  },
];

const questionsMultiples = [
  {
    question:
      "Quelles variétés d'ignames existent en Martinique ? (Choix multiples)",
    choices: ["Portugaise", "Pakala", "Allemande", "Bleu"],
    correctAnswer: ["Portugaise", "Pakala"],
  },

  {
    question:
      "Que trouve-t-on dans un repas de Noël antillais ? (Choix multiples)",
    choices: [
      "Pois d'angoles",
      "Jambon Nwel",
      "Pâtés salés",
      "Dinde",
      "Saumon fumé",
    ],
    correctAnswer: ["Pois d'angoles", "Jambon Nwel", "Pâtés salés"],
  },

  {
    question: "Quels types de boudins n'existent pas ? (Choix multiples)",
    choices: ["Manmanw", "Rouge", "Vert", "Blanc", "Nègre"],
    correctAnswer: ["Manmanw", "Vert", "Nègre"],
  },

  {
    question:
      "Quels styles musicaux ne sont pas originaires des antilles ? (Choix multiples)",
    choices: ["Bigin", "Electro", "Kompa", "Mazurka"],
    correctAnswer: ["Mazurka", "Electro"],
  },

  {
    question:
      "Parmis ces capitales lesquelles n'en sont pas ? (Choix multiples)",
    choices: [
      "La Havanne",
      "Port-au-Prince",
      "Moule",
      "Fort-de-France",
      "Marigot",
    ],
    corectAnswer: ["Moule", "Marigot"],
  },
];

export { questionsUniques, questionsMultiples };
