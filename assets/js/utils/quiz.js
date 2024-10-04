import { questions } from "../data/Question.js";
const startPage = document.querySelector(".start-page");
const quizContent = document.querySelector(".quiz-content");

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
    let h2 = document.querySelector("h2#question");
    h2.classList.remove("question-anim");

    // On force le reflow pour permettre à l'animation de se rejouer
    void h2.offsetWidth;
    h2.classList.add("question-anim");
    let question = quiz.getCurrentQuestion();
    if (question.type === "multiple") {
      this.elementShown(
        `${question.text} ? <span><i class="fa-solid fa-person-chalkboard"></i> <p>Plusieurs choix possibles</p></span> `,
        "question"
      );
    } else if (question.type === "unique") {
      this.elementShown(`${question.text} ?`, "question");
    }
  },

  choices: function (quiz) {
    //choicesQuestion est un tableau des choix de la question
    let question = quiz.getCurrentQuestion();
    let choicesQuestion = question.choices;
    const container = document.querySelector(".choice-container");
    container.innerHTML = ""; // Réinitialise le contenu précédent

    // On vérifie le type de la question et génère les inputs correspondants
    if (question.type === "unique") {
      choicesQuestion.forEach((choice, index) => {
        container.innerHTML += `
        <input type="radio" name="choice" id="choice${index}" value="${choice}" />
        <label for="choice${index}">${choice}</label>
        `;
      });
    } else if (question.type === "multiple") {
      choicesQuestion.forEach((choice, index) => {
        container.innerHTML += `
        <input type="checkbox" name="choice${index}" id="choice${index}" value="${choice}" />
        <label for="choice${index}">${choice}</label>
        `;
      });
    }

    let labels = document.querySelectorAll("label");
    labels.forEach((label) => {
      label.classList.remove("slide-in-blurred-left");
      void label.offsetWidth;
      label.classList.add("slide-in-blurred-left");
    });

    // Ajout du bouton "Suivant" désactivé par défaut
    container.innerHTML += `<button id="next-button" disabled>Suivant</button>`;
    const nextButton = document.getElementById("next-button");

    nextButton.classList.remove("bounce-in-fwd");
    void nextButton.offsetWidth;
    nextButton.classList.add("bounce-in-fwd");

    // Fonction pour activer le bouton "Suivant" si une réponse est sélectionnée
    const checkIfAnswerSelected = () => {
      if (question.type === "unique") {
        const selectedRadio = container.querySelector(
          "input[type='radio']:checked"
        );
        // Si le radio est sélectionné, le selectedRadio devient false donc le bouton est activé
        nextButton.disabled = !selectedRadio;
      } else if (question.type === "multiple") {
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
      if (question.type === "unique") {
        const selectedRadio = container.querySelector(
          "input[type='radio']:checked"
        );
        //On met dans un tableau les réponses de l'utilisateur
        userAnswers.push(selectedRadio.value);
      } else if (question.type === "multiple") {
        container
          .querySelectorAll("input[type='checkbox']:checked")
          .forEach((checkbox) => {
            userAnswers.push(checkbox.value);
          });
      }

      // Envoie les réponses à getUserAnswer()
      quiz.getUserAnswer(userAnswers);
      quizApp(quiz); // Recharge la question suivante
    });
  },

  progress: function (quiz) {
    this.elementShown(
      `
      Question <span id="current-question">${
        quiz.currentQuestionIndex + 1
      }</span>  sur <span id="total-question">${quiz.questions.length}</span> `,
      "question-number"
    );
  },

  endQuiz: function (quiz) {
    let endQuizHTML = `
      <div class="end-quiz">
        <h1>Quiz terminé !</h1>
        <h3 id="score-quiz">
          Votre score est de <span>${quiz.score}</span> / ${quiz.questions.length}
        </h3>
        <button id="end-btn">Terminer</button>
      </div>
    `;

    let restartQuizzHTML = `
    <div class="quiz-intro">
      <h2>Choisissez votre mode de quiz</h2>
      <div class="level-btn">
        <button id="normal">Quiz Normal</button>
        <button id="hard">Quiz Difficile</button>
      </div>
    </div>
    <div class="quiz-content">
      <h2 id="question"></h2>
    <div class="choice-container"></div>
    <h4 id="question-number"></h4>
    </div>
     `;
    let displayedQuizHTML = `
          <div class="quiz-intro" style="display: none;">
            <h2>Choisissez votre mode de quiz</h2>
          <div class="level-btn">
            <button id="normal">Quiz Normal</button>
            <button id="hard">Quiz Difficile</button>
          </div>
          </div>
        <div class="quiz-content"style="display: flex;">
          <h2 id="question"></h2>
        <div class="choice-container"></div>
        <h4 id="question-number"></h4>
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
        const selectedQuestions = selectHardQuizQuestions(questions);
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

  // les questions sont rangées aléatoirement
  return selectedQuestions.sort(() => Math.random() - 0.5);
};

// Sélectionne toutes les questions pour le mode difficile
const selectHardQuizQuestions = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
};

// Initialise le quiz
const startQuiz = (questions) => {
  for (const question in questions) {
    console.log(questions[question].text);
  }
  const quiz = new Quiz(questions);
  quizApp(quiz);
};

// Gestionnaire des boutons
normal.addEventListener("click", () => {
  const selectedQuestions = selectNormalQuizQuestions(questions);
  startQuiz(selectedQuestions);
  startPage.style.display = "none";
  quizContent.style.display = "flex";
});

hard.addEventListener("click", () => {
  const selectedQuestions = selectHardQuizQuestions(questions);
  startQuiz(selectedQuestions);
  startPage.style.display = "none";
  quizContent.style.display = "flex";
});

// Fonction de chargement du quiz
const quizApp = (quiz) => {
  //Demande si l'utilisateur est sur de quitter la page
  window.addEventListener("beforeunload", (e) => e.preventDefault());

  if (quiz.hasEnded()) {
    display.endQuiz(quiz);
  } else {
    display.question(quiz);
    display.choices(quiz);
    display.progress(quiz);
  }
};
