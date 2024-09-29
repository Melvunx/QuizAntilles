import { questions } from "./assets/data/Question.js";
const startPage = document.querySelector(".start-page");

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  //On enregistre le réponse de l'utilsateur et on passe à la question suivante
  getUserAnswer(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }

  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

// Quiz display
const display = {
  elementShown: function (text, id) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },

  question: function (quiz) {
    this.elementShown(quiz.getCurrentQuestion().text + " ?", "question");
  },

  choices: function (quiz) {
    //choicesQuestion est un tableau des choix de la question
    let choicesQuestion = quiz.getCurrentQuestion().choices;
    const container = document.querySelector(".choice-container");
    container.innerHTML = ""; // Réinitialise le contenu précédent

    // On vérifie le type de la question et génère les inputs correspondants
    if (quiz.getCurrentQuestion().type === "unique") {
      choicesQuestion.forEach((choice, index) => {
        container.innerHTML += `
          <li>
            <input type="radio" name="choice" id="choice${index}" value="${choice}" />
            <label for="choice${index}">${choice}</label>
          </li>
        `;
      });
    } else if (quiz.getCurrentQuestion().type === "multiple") {
      choicesQuestion.forEach((choice, index) => {
        container.innerHTML += `
          <li>
            <input type="checkbox" name="choice${index}" id="choice${index}" value="${choice}" />
            <label for="choice${index}">${choice}</label>
          </li>
        `;
      });
    }

    // Ajout du bouton "Suivant" désactivé par défaut
    container.innerHTML += `<button id="next-button" disabled>Suivant</button>`;

    const nextButton = document.getElementById("next-button");

    // Fonction pour activer le bouton "Suivant" si une réponse est sélectionnée
    const checkIfAnswerSelected = () => {
      if (quiz.getCurrentQuestion().type === "unique") {
        const selectedRadio = container.querySelector(
          "input[type='radio']:checked"
        );
        // Si le radio est sélectionné, le selectedRadio devient false donc le bouton est activé
        nextButton.disabled = !selectedRadio;
      } else if (quiz.getCurrentQuestion().type === "multiple") {
        const selectedCheckboxes = container.querySelectorAll(
          "input[type='checkbox']:checked"
        );
        nextButton.disabled = selectedCheckboxes.length === 0;
      }
    };

    // Ajout des écouteurs d'événements sur les inputs
    container.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", checkIfAnswerSelected);
    });

    // Gestionnaire pour le bouton "Suivant"
    nextButton.addEventListener("click", () => {
      let userAnswers = [];
      if (quiz.getCurrentQuestion().type === "unique") {
        const selectedRadio = container.querySelector(
          "input[type='radio']:checked"
        );
        userAnswers.push(selectedRadio.value);
      } else if (quiz.getCurrentQuestion().type === "multiple") {
        container
          .querySelectorAll("input[type='checkbox']:checked")
          .forEach((checkbox) => {
            userAnswers.push(checkbox.value);
          });
      }

      // Envoie les réponses à getUserAnswer()
      quiz.getUserAnswer(userAnswers);
      console.log(userAnswers, "score : " + quiz.score);
      quizApp(quiz); // Recharge la question suivante
    });
  },

  progress: function (quiz) {
    this.elementShown(
      `Question ${quiz.currentQuestionIndex + 1} sur ${quiz.questions.length}`,
      "question-number"
    );
  },

  endQuiz: function (quiz) {
    let endQuizHTML = `
      <div class="end-quiz">
        <h1>Quiz terminé !</h1>
        <h3>Votre score est de ${quiz.score} / ${quiz.questions.length} </h3>
        <button id="end-btn">Terminer</button>
      </div>
    `;
    let restartQuizzHTML = `
    <div class="quiz-intro">
    <h2>Choisissez votre mode de quiz :</h2>
    <button id="normal">Quiz Normal</button>
    <button id="hard">Quiz Difficile</button>
    </div>
    <div class="quiz-content">
    <h2 id="question"></h2>
    <h3 id="score"></h3>
    <div class="choice-container"></div>
    <p id="question-number"></p>
    </div>
      `;
    let displayedQuizHTML = `
          <div class="quiz-intro" style="display: none;">
            <h2>Choisissez votre mode de quiz :</h2>
            <button id="normal">Quiz Normal</button>
            <button id="hard">Quiz Difficile</button>
          </div>
        <div class="quiz-content">
        <h2 id="question"></h2>
        <h3 id="score"></h3>
        <div class="choice-container"></div>
        <p id="question-number"></p>
        </div>
        `;
    this.elementShown(endQuizHTML, "quiz");

    // Gestionnaire pour le bouton de fin
    document.getElementById("end-btn").addEventListener("click", () => {
      // Réinitialise le quiz et affiche la page initiale
      this.elementShown(restartQuizzHTML, "quiz");

      // Ré-attache les événements aux boutons de sélection de quiz
      document.getElementById("normal").addEventListener("click", () => {
        this.elementShown(displayedQuizHTML, "quiz");
        const selectedQuestions = selectNormalQuizQuestions(questions);
        startQuiz(selectedQuestions);
      });

      document.getElementById("hard").addEventListener("click", () => {
        this.elementShown(displayedQuizHTML, "quiz");
        const selectedQuestions = selectedHardQuizQuestions(questions);
        startQuiz(selectedQuestions);
      });
    });
  },
};

// Sélectionne les questions pour le mode normal
const selectNormalQuizQuestions = (questions) => {
  const multipleQuestions = questions.filter(
    (question) => question.type === "multiple"
  );
  const uniqueQuestions = questions.filter(
    (question) => question.type === "unique"
  );

  let selectedQuestions = [];

  // Vérification que nous avons au moins 3 questions de type "multiple"
  if (multipleQuestions.length >= 3) {
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * multipleQuestions.length);
      // Ajout de la question au tableau des questions sélectionnées
      selectedQuestions.push(multipleQuestions[randomIndex]);
      // Suppression de la question sélectionnée pour éviter les doublons
      multipleQuestions.splice(randomIndex, 1);
    }
  } else {
    throw new Error("Pas assez de questions de type multiple disponibles");
  }

  // Mélange et ajout des questions uniques/multiples restantes pour compléter jusqu'à 10 questions
  const remainingQuestions = [...multipleQuestions, ...uniqueQuestions];
  while (selectedQuestions.length < 10 && remainingQuestions.length > 0) {
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    selectedQuestions.push(remainingQuestions[randomIndex]);
    remainingQuestions.splice(randomIndex, 1); // Supprimer pour éviter les doublons
  }

  // Mélanger l'ordre des questions sélectionnées
  return selectedQuestions.sort(() => Math.random() - 0.5);
};

// Sélectionne toutes les questions pour le mode difficile
const selectHardQuizQuestions = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
};

// Initialise le quiz
const startQuiz = (questions) => {
  const quiz = new Quiz(questions);
  quizApp(quiz);
};

// Gestionnaire des boutons
normal.addEventListener("click", () => {
  const selectedQuestions = selectNormalQuizQuestions(questions);
  startQuiz(selectedQuestions);
  startPage.classList.add("invisible");
});

hard.addEventListener("click", () => {
  const selectedQuestions = selectHardQuizQuestions(questions);
  startQuiz(selectedQuestions);
  startPage.classList.add("invisible");
});

// Fonction de chargement du quiz
const quizApp = (quiz) => {
  if (quiz.hasEnded()) {
    display.endQuiz(quiz);
  } else {
    display.question(quiz);
    display.choices(quiz);
    display.progress(quiz);
  }
};
