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
    let choicesQuestion = quiz.getCurrentQuestion().choices;
    const container = document.querySelector(".choice-container");
    container.innerHTML = "";
    if (quiz.getCurrentQuestion().type === "unique") {
      choicesQuestion.forEach((choice, index) => {
        container.innerHTML += `
            <input type="radio" name="choice" id="choice${index}" value="${choice}" />
            <label for="choice${index}">${choice}</label>
        `;
      });
    } else if (quiz.getCurrentQuestion().type === "multiple") {
      choicesQuestion.forEach((choice, index) => {
        container.innerHTML += `
            <input type="checkbox" name="choice${index}" id="choice${index}" value="${choice}" />
            <label for="choice${index}">${choice}</label>
        `;
      });
    }

    container.innerHTML += `<button id="next-button" disabled>Suivant</button>`;
    const nextButton = document.getElementById("next-button");

    const checkIfAnswerSelected = () => {
      if (quiz.getCurrentQuestion().type === "unique") {
        const selectedRadio = container.querySelector(
          "input[type='radio']:checked"
        );
        nextButton.disabled = !selectedRadio;
      } else if (quiz.getCurrentQuestion().type === "multiple") {
        const selectedCheckboxes = container.querySelectorAll(
          "input[type='checkbox']:checked"
        );
        nextButton.disabled = selectedCheckboxes.length === 0;
      }
    };

    container.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", checkIfAnswerSelected);
    });

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
      quiz.getUserAnswer(userAnswers);
      quizApp(quiz);
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
    this.elementShown(endQuizHTML, "quiz");

    document.getElementById("end-btn").addEventListener("click", () => {
      this.resetQuiz();
    });
  },
  resetQuiz: function () {
    let restartQuizzHTML = `
    <div class="quiz-intro">
      <h2>Choisissez votre mode de quiz :</h2>
      <div class="level-btn">
        <button id="normal">Quiz Normal</button>
        <button id="hard">Quiz Difficile</button>
      </div>
    </div>
    <div class="quiz-content">
      <h2 id="question"></h2>
      <h3 id="score"></h3>
      <div class="choice-container"></div>
      <p id="question-number"></p>
    </div>
    `;
    this.elementShown(restartQuizzHTML, "quiz");

    document.getElementById("normal").addEventListener("click", () => {
      const selectedQuestions = selectNormalQuizQuestions(questions);
      startQuiz(selectedQuestions);
    });

    document.getElementById("hard").addEventListener("click", () => {
      const selectedQuestions = selectHardQuizQuestions(questions);
      startQuiz(selectedQuestions);
    });
  },
};

const selectNormalQuizQuestions = (questions) => {
  const multipleQuestions = questions.filter(
    (question) => question.type === "multiple"
  );
  const uniqueQuestions = questions.filter(
    (question) => question.type === "unique"
  );

  let selectedQuestions = [];

  if (multipleQuestions.length >= 3) {
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * multipleQuestions.length);
      selectedQuestions.push(multipleQuestions[randomIndex]);
      multipleQuestions.splice(randomIndex, 1);
    }
  } else {
    throw new Error("Pas assez de questions de type multiple disponibles");
  }

  const remainingQuestions = [...multipleQuestions, ...uniqueQuestions];
  while (selectedQuestions.length < 10 && remainingQuestions.length > 0) {
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    selectedQuestions.push(remainingQuestions[randomIndex]);
    remainingQuestions.splice(randomIndex, 1);
  }

  return selectedQuestions.sort(() => Math.random() - 0.5);
};

const selectHardQuizQuestions = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
};

const startQuiz = (questions) => {
  const quiz = new Quiz(questions);
  quizApp(quiz);
};

const quizApp = (quiz) => {
  // Ajout de l'événement 'beforeunload' pour afficher l'alerte lors du rechargement ou de la fermeture
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
  });

  if (quiz.hasEnded()) {
    display.endQuiz(quiz);
  } else {
    display.question(quiz);
    display.choices(quiz);
    display.progress(quiz);
  }
};

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
