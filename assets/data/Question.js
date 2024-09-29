class Question {
  constructor(type, text, choices, answers) {
    this.type = type;
    this.text = text;
    this.choices = choices;
    this.answers = answers;
  }

  isCorrectAnswer(choice) {
    if (this.type === "unique") {
      return choice === this.answers;
    } else if (this.type === "multiple") {
      return (
        choice.every((answer) => this.answers.includes(answer)) &&
        this.answers.every((answer) => choice.includes(answer))
      );
    }
  }
}

const questionsUniques = [
  {
    question: " ",
    choices: [
      "Pour les fêtes",
      "Pour les enterrement",
      "Pour les soirées dansantes",
    ],
    correctAnswer: "Pour les enterrement",
  },

  {
    question: "  ",
    choices: [
      "Une danse traditionnelle Martiniquaise",
      " Opéra de Martinique",
      " club de danse haïtien",
    ],
    correctAnswer: "Une danse traditionnelle Martiniquaise",
  },

  {
    question: " ",
    choices: ["Du piano", "Du triangle endiablé", "De la flûte en bambou"],
    correctAnswer: "De la flûte en bambou",
  },

  {
    question: " ",
    choices: ["La Imperfecta", "La Perfecta", "Joris LARNOIR"],
    correctAnswer: "La Perfecta",
  },

  {
    question: " ",
    choices: ["Kreyol la", "Zafem", "Les Aiglons", "Djet-X"],
    correctAnswer: "Les Aiglons",
  },

  {
    question: " ",
    choices: ["Raï", "Bouyon", "Jamaïque"],
    correctAnswer: "Raï",
  },

  {
    question: " ",
    choices: ["Fécat'Jy", "Edmonde Rusland", "Jid Kreyolad"],
    correctAnswer: "Fécat'Jy",
  },

  {
    question: " ",
    choices: [" tour des Yoles", " Tchimbé Raid", "La savane des esclaves"],
    correctAnswer: " tour des Yoles",
  },

  {
    question: " ",
    choices: ["22 Septembre 1920", "8 Mai 1902", "11 Novembre 1932"],
    correctAnswer: "8 Mai 1902",
  },

  {
    question: " ",
    choices: ["Euzhan Palcy", "Aimé Césaire", "Frédéric Pichon"],
    correctAnswer: "Euzhan Palcy",
  },

  {
    question: " ",
    choices: ["Joé dwet Filé", , "Gary Victor", "Alfred Marie Jeanne"],
    correctAnswer: "Gary Victor",
  },

  {
    question: " ",
    choices: [
      "L'abolition de l'esclavage",
      " festival du crabe gras",
      " carnaval",
    ],
    correctAnswer: " carnaval",
  },

  {
    question: " ",
    choices: [" phoque", " lamentin", "La Baleine à Bosse"],
    correctAnswer: " lamentin",
  },

  {
    question: " ",
    choices: [
      " poisson meurtrier",
      " serpent venimeux",
      " oiseau mangeur d'homme",
    ],
    correctAnswer: " serpent venimeux",
  },

  {
    question: " ",
    choices: [" Morne Rouge", " Lorrain", " Gros-Morne", "Saint-Pierre"],
    correctAnswer: "Saint-Pierre",
  },

  {
    question: " ",
    choices: [" chien", " esprit maléfique", " plat de résistance"],
    correctAnswer: " esprit maléfique",
  },
];

export const questions = [
  new Question(
    "unique",
    "Quel poisson issu des mers froides utilise-t-on pour faire des accras en Martinique",
    ["Morue", "Dorade", "Coulirou"],
    "Morue"
  ),
  new Question(
    "unique",
    "Qu'est ce que le féroce",
    ["Adjectif", "Boisson très alcoolisée", "Plat à base d'avocat"],
    "Plat à base d'avocat"
  ),
  new Question(
    "unique",
    "Qu'est qu'un bokit",
    ["Sandwich", "Kit de cuisine", "Animal"],
    "Sandwich"
  ),
  new Question(
    "unique",
    "Qu'est-ce qu'un caca boeuf",
    ["Excréments frits", "Fruit applatit", "Gâteau"],
    "Gâteau"
  ),
  new Question(
    "unique",
    "Qu'est-ce qu'un blaff",
    [
      "Plat de poisson",
      "Plat à base de poulet",
      "Désert copieux à la noix de coco",
    ],
    "Plat de poisson"
  ),
  new Question(
    "unique",
    "Qu'est-ce qu'un dombré",
    [
      "Plat avec des boulettes de viande",
      "Plat avec des boulettes de farine",
      "Plat avec des testicules de taureau",
    ],
    "Plat avec des boulettes de farine"
  ),
  new Question(
    "unique",
    "Le mancelinier est un arbre innoffensif",
    ["Oui", "Non", "On ne sait pas"],
    "Non"
  ),
  new Question(
    "unique",
    "Qu'est-ce que le «Chouval Bwa»",
    [
      "Sport hippique traditionnel en musique",
      "Style musical qui accompagne un manège",
      "Ancien musicien",
    ],
    "Style musical qui accompagne un manège"
  ),
  new Question(
    "unique",
    "Quand jouait-on habituellement du Gwoka en Guadeloupe",
    [""],
    ""
  ),
  new Question(
    "unique",
    "Finissez cette phrase: «Zouk la sé sel ...»",
    ["Poivre et Girofle", "Medikamen nou ni", "Rimèd mwen ni"],
    "Medikamen nou ni"
  ),
  new Question("unique", "Qu'est-ce que le «bèlè»", [""], ""),
  new Question(
    "unique",
    "Quel est l'un des instruments joué le célèbre Eugène Mona",
    [""],
    ""
  ),
  new Question("unique", "Qui interprète «La divinité»", [""], ""),
  new Question("unique", "Quel groupe N'est PAS originaire d'Haiti", [""], ""),
  new Question(
    "unique",
    "Parmis les musiques suivantes laquelle n'est PAS antillaise",
    [""],
    ""
  ),
  new Question("unique", "Qui chante «Sans bikini sans monokini...»", [""], ""),
  new Question(
    "unique",
    "Quelle compétion inscrite au patrimoine immatériel de l'Unesco fait la fierté des Martiniquais",
    [""],
    ""
  ),
  new Question(
    "unique",
    "Quand a eu lieu l'éruption volcanique de la Pelée la plus connue",
    [""],
    ""
  ),
  new Question("unique", "Qui a réalisé «La Rue case nègre»", [""], ""),
  new Question(
    "unique",
    "Qui a écrit «Le Diable dans un thé à la citronnelle»",
    [""],
    ""
  ),
  new Question(
    "unique",
    "Quel fête se déroule habituellement en février les jours gras",
    [""],
    ""
  ),
  new Question(
    "unique",
    "Quelle communne de Martinique tire son nom d'un ancien animal marin qui vivait dans ses eaux",
    [""],
    ""
  ),
  new Question("unique", "Qu'es-ce que le Trigonocéphale", [""], ""),
  new Question(
    "unique",
    "Quelle commune a été capitale de la Martinique",
    [""],
    ""
  ),
  new Question("unique", "Qu'est ce qu'un dowliss", [""], ""),

  new Question(
    "multiple",
    "Quelles variétés d'ignames existent en Martinique",
    ["Portugaise", "Pakala", "Allemande", "Bleu"],
    ["Portugaise", "Pakala"]
  ),
  new Question(
    "multiple",
    "Que trouve-t-on dans un repas de Noël antillais",
    ["Pois d'angoles", "Jambon Nwel", "Pâtés salés", "Dinde", "Saumon fumé"],
    ["Pois d'angoles", "Jambon Nwel", "Pâtés salés"]
  ),
  new Question(
    "multiple",
    "Quels types de boudins N'existent PAS",
    ["Manmanw", "Rouge", "Vert", "Blanc", "Nègre"],
    ["Manmanw", "Vert", "Nègre"]
  ),
  new Question(
    "multiple",
    "Quels styles musicaux NE sont PAS originaires des antilles",
    ["Bigin", "Electro", "Kompa", "Mazurka"],
    ["Mazurka", "Electro"]
  ),
  new Question(
    "multiple",
    "Parmis ces capitales lesquelles N'en sont PAS",
    ["La Havanne", "Port-au-Prince", "Moule", "Fort-de-France", "Marigot"],
    ["Moule", "Marigot"]
  ),
];
