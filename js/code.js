document.addEventListener("DOMContentLoaded", function(){

    const questionsUniques = [

      {
        question: "Quel poisson issu des mers froides utilise-t-on pour faire des accras en Martinique ?",
        choices: ["La morue", "La dorade", "Le coulirou"],
        correctAnswer: "La morue"
      },

      {
        question: "Qu'est ce que le féroce ?",
        choices: ["Un adjectif", "Une boisson très alcoolisée", "Un plat à base d'avocat"],
        correctAnswer: "Un plat à base d'avocat",
      },

      {
        question: "Qu'est qu'un bokit ?",
        choices: ["un sandwich","Un kit de cuisine","Un animal"],
        correctAnswer: "un sandwich",
      },

      {
        question: "Qu'est ce qu'un caca boeuf ?",
        choices: ["Des excréments frits", "Un fruit applatit", "Un gâteau"],
        correctAnswer: "Un gâteau",
      },

      {
        question: "C'est quoi un blaff ?",
        choices: ["Un plat de poisson","Un plat à base de poulet","Un désert copieux à la noix de coco"],
        correctAnswer: "Un plat de poisson",
      },    
        
      {
        question: "C'est quoi un dombré ?",
        choices: ["Un plat avec des boulettes de viande","Un plat avec des boulettes de farine","Un plat avec des testicules de taureau"],
        correctAnswer: "Un plat avec des boulettes de farine",
      },

      {
        question: "Le mancelinier est un arbre innoffensif ?",
        choices: ["oui","non"],
        correctAnswer: "non",
      },

      {
        question: "Finissez cette phrase: «Zouk la sé sel ...»",
        choices: ["Poivre et Girofle","Medikamen nou ni","Rimèd mwen ni"],
        correctAnswer: "Medikamen nou ni",
      },
       
      {
        question:  " C'est quoi le «Chouval Bwa» ?",
        choices:["Un sport hippique traditionnel en musique","Un style musical qui accompagne un manège","Un ancien musicien"],
        correctAnswer:"Un style musical qui accompagne un manège"
      },

      {
        question:"Quand jouait-on habituellement du Gwoka en Guadeloupe ?",
        choices:["Pour les fêtes","Pour les enterrement","Pour les soirées dansantes"],
        correctAnswer:"Pour les enterrement"
      },

      {
        question:" C'est quoi «le bèlè» ?",
        choices:["Une danse traditionnelle Martiniquaise","Un Opéra de Martinique","Un club de danse haïtien"],
        correctAnswer:"Une danse traditionnelle Martiniquaise",
       },

       {
        question:"Quel est l'un des instruments joué le célèbre Eugène Mona ?",
        choices:["Du piano","Du triangle endiablé","De la flûte en bambou"],
        correctAnswer:"De la flûte en bambou",
       },

       {
        question:"Qui interprète «La divinité» ?",
        choices:["La Imperfecta","La Perfecta","Joris LARNOIR"],
        correctAnswer:"La Perfecta",
       },

       {
        question:"Quel groupe n'est pas originaire d'Haiti ?",
        choices:["Kreyol la","Zafem","Les Aiglons","Djet-X"],
        correctAnswer:"Les Aiglons",
        },
        
       {
        question:"Parmis les musiques suivantes laquelle n'est pas antillaise ?",
        choices:["Raï","Bouyon","Jamaïque"],
        correctAnswer:"Raï",
        },
        
        {
        question:"Qui chante «Sans bikini sans monokini...» ?",
        choices:["Fécat'Jy","Edmonde Rusland","Jid Kreyolad"],
        correctAnswer:"Fécat'Jy",
        },

         
        {
          question:"Quelle compétion inscrite au patrimoine immatériel de l'Unesco fait la fierté des Martiniquais ?",
          choices:["Le tour des Yoles","Le Tchimbé Raid","La savane des esclaves"],
          correctAnswer:"Le tour des Yoles",
         },

         {
          question:"Quand a eu lieu l'éruption volcanique de la Pelée la plus connue ?",
          choices:["22 Septembre 1920","8 Mai 1902","11 Novembre 1932"],
          correctAnswer:"8 Mai 1902",
         },

         {
          question:"Qui a réalisé «La Rue case nègre» ?",
          choices:["Euzhan Palcy","Aimé Césaire","Frédéric Pichon"],
          correctAnswer:"Euzhan Palcy",
         },

         {
          question:"Qui a écrit «Le Diable dans un thé à la citronnelle» ?",
          choices:["Joé dwet Filé",,"Gary Victor","Alfred Marie Jeanne"],
          correctAnswer:"Gary Victor",
         },

         {
          question:"Quel fête se déroule habituellement en février les jours gras ?",
          choices:["L'abolition de l'esclavage","Le festival du crabe gras","Le carnaval"],
          correctAnswer:"Le carnaval"
         },

         {
          question:"Quelle communne de Martinique tire son nom d'un ancien animal marin qui vivait dans ses eaux ?",
          choices:["Le phoque","Le lamentin","La Baleine à Bosse"],
          correctAnswer:"Le lamentin",
         },

         {
          question:"C'est quoi le Trigonocéphale ?",
          choices:["Un poisson meurtrier","Un serpent venimeux","Un oiseau mangeur d'homme"],
          correctAnswer:"Un serpent venimeux",
         },

         {
          question:"Quelle commune a été capitale de la Martinique ?",
          choices:["Le Morne Rouge","Le Lorrain","Le Gros-Morne","Saint-Pierre"],
          correctAnswer:"Saint-Pierre",
         },

         {
          question:"Qu'est ce qu'un dowliss ?",
          choices:["Un chien","Un esprit maléfique","Un plat de résistance"],
          correctAnswer:"Un esprit maléfique",
         },
    ];

    const questionsMultiples = [
        {
            question: "Quelles variétés d'ignames existent en Martinique ? (Choix multiples)",
            choices: ["Portugaise","Pakala","Allemande","Bleu"],
            correctAnswer: ["Portugaise","Pakala"],
        },

        {
            question: "Que trouve-t-on dans un repas de Noël antillais ? (Choix multiples)",
            choices: ["Pois d'angoles", "Jambon Nwel", "Pâtés salés", "Dinde", "Saumon fumé"],
            correctAnswer: ["Pois d'angoles", "Jambon Nwel", "Pâtés salés"],
        },

        {
            question: "Quels types de boudins n'existent pas ? (Choix multiples)",
            choices: ["Manmanw","Rouge","Vert","Blanc","Nègre"],
            correctAnswer: ["Manmanw", "Vert", "Nègre"],
        },

        {
            question: "Quels styles musicaux ne sont pas originaires des antilles ? (Choix multiples)",
            choices: ["Bigin","Electro","Kompa","Mazurka"],
            correctAnswer:["Mazurka","Electro"],
        },

        {
          question:"Parmis ces capitales lesquelles n'en sont pas ? (Choix multiples)",
          choices:["La Havanne","Port-au-Prince","Moule","Fort-de-France","Marigot"],
          corectAnswer:["Moule","Marigot"],
        },
    ]
  
    let currentQuestionIndexUnq = 0;
    let userAnswersUnq = [];
    let currentQuestionIndexMc = 0;
    let userAnswersMc = [];

    function loadQuestion() {
      const questionContainerUnq = document.getElementById("question-container-unq");
      const choicesContainerUnq = document.getElementById("choices-container-unq");
      
      if (currentQuestionIndexUnq < questionsUniques.length) {
        const currentQuestion = questionsUniques[currentQuestionIndexUnq];
        questionContainerUnq.textContent = currentQuestion.question;

        choicesContainerUnq.innerHTML = "";
        currentQuestion.choices.forEach((choice, index) => {
          const choiceLabelUnq = document.createElement("label");
          const choiceInputUnq = document.createElement("input");
          choiceInputUnq.type = "radio";
          choiceInputUnq.name = "choice";
          choiceInputUnq.value = choice;
          choiceInputUnq.id = "choice" + index;

          choiceLabelUnq.appendChild(choiceInputUnq);
          choiceLabelUnq.appendChild(document.createTextNode(choice));

          choicesContainerUnq.appendChild(choiceLabelUnq);
        });
        document.getElementById("submit-answer").onclick = submitAnswer;
      } else {
        const questionContainerMc = document.getElementById("question-container-mc");
        const choicesContainerMc = document.getElementById("choices-container-mc");

        if (currentQuestionIndexMc < questionsMultiples.length) {
          const currentQuestion = questionsMultiples[currentQuestionIndexMc];
          questionContainerMc.textContent = currentQuestion.question;

       // Afficher le QCM à choix multiple et masquer le QCM à réponse unique
        questionContainerUnq.style.display = "none";
        choicesContainerUnq.style.display = "none";
        questionContainerMc.style.display = "block";
        choicesContainerMc.style.display = "block";

          choicesContainerMc.innerHTML = "";
          currentQuestion.choices.forEach((choice, index) => {
            const choiceLabelMc = document.createElement("label");
            const choiceInputMc = document.createElement("input");
            choiceInputMc.type = "checkbox";
            choiceInputMc.name = "choice";
            choiceInputMc.value = choice;
            choiceInputMc.id = "choice" + index;

            choiceLabelMc.appendChild(choiceInputMc);
            choiceLabelMc.appendChild(document.createTextNode(choice));

            choicesContainerMc.appendChild(choiceLabelMc);
          });
          document.getElementById("submit-answer").onclick = submitAnswer;
        } else {
          //Montre les résultats du quiz
          showResults();
        }
      }
    }

    function submitAnswer(event) {
        // Empêcher le rechargement de la page
        event.preventDefault();

      //Si l'utilisateur n'a pas cocher de réponse et qu'il clique sur le bouton, cette alerte apparaît
      const selectedChoice = document.querySelector('input[name="choice"]:checked');
      if (!selectedChoice) {
        alert("Veuillez sélectionner une réponse !");
        return;
      }

      if (currentQuestionIndexUnq < questionsUniques.length) {
        userAnswersUnq[currentQuestionIndexUnq] = selectedChoice.value;
        currentQuestionIndexUnq++;
      } else if (currentQuestionIndexMc < questionsMultiples.length) {
        userAnswersMc[currentQuestionIndexMc] = selectedChoice.value;
        currentQuestionIndexMc++;
      }
      compteurQuestion();
      loadQuestion();
    }

    function showResults() {

      const resultElement = document.getElementById("result");
      let correctAnswers = 0;


      questionsUniques.forEach((question, index) => {
        if (userAnswersUnq[index] === question.correctAnswer) {
          correctAnswers++;
        }

      });

      questionsMultiples.forEach((question, index) => {
        if (arraysEqual(userAnswersMc[index], question.correctAnswer)) {
          correctAnswers++;
        }
      });

      resultElement.textContent = "Vous avez " + correctAnswers + " réponses correctes sur " + (questionsUniques.length + questionsMultiples.length) + ".";
  
      
      if (correctAnswers <= 7){
        alert("Manman ou fèb réésayé pli ta !");
        return;
      } 
      else if (correctAnswers <= 21){
        alert("Ou ka défann kow mai sa pa sufisan")
        return;
      }
      else if (correctAnswers > 22){
        alert("Ou cé en réel antillais boug mwen !")
        return;
      }
    }

    //fonction qui compare le nombre de questions répondu et le nombre de questions qu'il reste à répondre
    function arraysEqual(arr1, arr2) {
      return JSON.stringify(arr1) === JSON.stringify(arr2);
    }

    function compteurQuestion() {
      const compteurQuestionElement = document.getElementById("compteur-question");
      let compteur = 0;
      
      // Compter les réponses pour les questions uniques
      userAnswersUnq.forEach(answer => {
          if (answer !== undefined) {
              compteur++;
          }
      });
  
      // Compter les réponses pour les questions multiples
      userAnswersMc.forEach(answer => {
          if (answer !== undefined) {
              compteur++;
          }
      });
  
      compteurQuestionElement.textContent = "Questions répondues " + compteur + " sur " + (questionsUniques.length + questionsMultiples.length) + " le total de questions";
  }
    // Initialiser le questionnaire
    compteurQuestion();
    loadQuestion();
  });