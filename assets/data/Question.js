class Question {
  constructor(type, text, choices, answers) {
    this.type = type;
    this.text = text;
    this.choices = choices;
    this.answers = answers;
  }

  isCorrectAnswer(choice) {
    if (this.type === "unique") {
      return String(choice) === this.answers;
    } else if (this.type === "multiple") {
      // Vérifie si toutes les bonnes réponses sont présentes dans les réponses de l'utilisateur, peu importe l'ordre
      const sortedUserAnswers = choice.sort();
      const sortedCorrectAnswers = this.answers.sort();

      return (
        sortedUserAnswers.length === sortedCorrectAnswers.length &&
        sortedUserAnswers.every(
          (val, index) => val === sortedCorrectAnswers[index]
        )
      );
    }
  }
}

export const questions = [
  new Question(
    "unique",
    "Quel poisson issu des mers froides utilise-t-on pour faire des accras en Martinique",
    ["Morue", "Dorade", "Coulirou"],
    "Morue"
  ),

  new Question(
    "unique",
    "Qu'est-ce que le féroce",
    ["Adjectif", "Boisson très alcoolisée", "Plat à base d'avocat"],
    "Plat à base d'avocat"
  ),

  new Question(
    "unique",
    "Quel est le nombre de communes en Martinique",
    ["37", "30", "34"],
    "34"
  ),

  new Question(
    "unique",
    "Qu'est-ce qu'un bokit",
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
    "Qui est le préfet de la Martinique",
    ["Stanislas Cazelles ", "Jean-Christophe Bouvier", "Franck Robine"],
    "Jean-Christophe Bouvier"
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
    "Qui est le préfet de la Guadeloupe",
    ["Alexandre Rochatte", "Philippe Gustin", "Xavier Lefort"],
    "Xavier Lefort"
  ),

  new Question(
    "unique",
    "Quand jouait-on habituellement du Gwoka en Guadeloupe",
    ["Pour les fêtes", "Pour les enterrement", "Pour les soirées dansantes"],
    "Pour les enterrement"
  ),

  new Question(
    "unique",
    "Finissez cette phrase: «Zouk la sé sel ...»",
    ["Poivre et Girofle", "Medikamen nou ni", "Rimèd mwen ni"],
    "Medikamen nou ni"
  ),

  new Question(
    "unique",
    "Qu'est-ce que le «bèlè»",
    [
      "Danse traditionnelle Martiniquaise",
      "Opéra de Martinique",
      "Club de danse haïtien",
    ],
    "Danse traditionnelle Martiniquaise"
  ),

  new Question(
    "unique",
    "Quel est l'un des instruments joué le célèbre Eugène Mona",
    ["Piano", "Triangle endiablé", "Flûte en bambou"],
    "De la flûte en bambou"
  ),

  new Question(
    "unique",
    "Qui interprète «La divinité»",
    ["La Imperfecta", "La Perfecta", "Joris LARNOIR"],
    "La Perfecta"
  ),

  new Question(
    "unique",
    "Quel groupe est originaire de la Guadeloupe",
    ["Kreyol la", "Zafem", "Les Aiglons", "Djet-X"],
    "Les Aiglons"
  ),

  new Question(
    "unique",
    "Parmis les musiques suivantes laquelle N'est PAS antillaise",
    ["Raï", "Bouyon", "Jamaïque"],
    "Raï"
  ),

  new Question(
    "unique",
    "Qui chante «Sans bikini sans monokini...»",
    ["Fécat'Jy", "Edmonde Rusland", "Jid Kreyolad"],
    "Fécat'Jy"
  ),

  new Question(
    "unique",
    "Quelle compétion inscrite au patrimoine immatériel de l'Unesco fait la fierté des Martiniquais",
    ["Tour des Yoles", " Tchimbé Raid", "La savane des esclaves"],
    "Tour des Yoles"
  ),

  new Question(
    "unique",
    "Quand a eu lieu la dernière éruption volcanique de la Montagne Pelée",
    ["16 septembre 1929", "8 Mai 1902", "22 mai 1848"],
    "16 septembre 1929"
  ),

  new Question(
    "unique",
    "Qui a réalisé «La Rue case nègre»",
    ["Euzhan Palcy", "Aimé Césaire", "Frédéric Pichon"],
    "Euzhan Palcy"
  ),

  new Question(
    "unique",
    "Qui a écrit «Le Diable dans un thé à la citronnelle»",
    ["Joé dwet Filé", , "Gary Victor", "Alfred Marie Jeanne"],
    "Gary Victor"
  ),

  new Question(
    "unique",
    "Quel fête se déroule habituellement en février les jours gras",
    ["L'abolition de l'esclavage", "Festival du crabe gras", "Carnaval"],
    "Carnaval"
  ),

  new Question(
    "unique",
    "Quelle communne de Martinique tire son nom d'un ancien animal marin qui vivait dans ses eaux",
    ["Phoque", "Lamentin", "Baleine à Bosse"],
    "Lamentin"
  ),

  new Question(
    "unique",
    "Qu'est-ce que le Trigonocéphale",
    ["Poisson meurtrier", "Serpent venimeux", "Oiseau mangeur d'homme"],
    "Serpent venimeux"
  ),

  new Question(
    "unique",
    "Quelle commune a été capitale de la Martinique auparavant",
    ["Morne Rouge", "Lorrain", "Gros-Morne", "Saint-Pierre"],
    "Saint-Pierre"
  ),

  new Question(
    "unique",
    "En quelle année la Martinique a été découverte",
    ["1492", "1502", "1498"],
    "1502"
  ),

  new Question(
    "unique",
    "Qu'est ce qu'un dowliss",
    ["Chien", "Esprit maléfique", "Plat de résistance"],
    "Esprit maléfique"
  ),

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
    "Par qui les Antilles ont-elles été colonisées au cours de leur histoire",
    ["Les anglais", "Les espagnols", "Les néerlandais", "Les français"],
    ["Les anglais", "Les français"]
  ),

  new Question(
    "multiple",
    "Quels styles musicaux NE sont PAS originaires des antilles",
    ["Bigin", "Electro", "Kompa", "Mazurka"],
    ["Mazurka", "Electro"]
  ),

  new Question(
    "multiple",
    "Parmi ces capitales lesquelles N'en sont PAS",
    ["La Havanne", "Port-au-Prince", "Moule", "Fort-de-France", "Marigot"],
    ["Moule", "Marigot"]
  ),
];
