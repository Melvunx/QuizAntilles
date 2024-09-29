import { questionsUniques, questionsMultiples } from "./assets/data/Question";

document.addEventListener("DOMContentLoaded", () => {
  let currentQuestionIndexUnq = 0;
  let userAnswersUnq = [];
  let currentQuestionIndexMc = 0;
  let userAnswersMc = [];

  function loadQuestion() {
    const questionContainerUnq = document.getElementById(
      "question-container-unq"
    );
    const choicesContainerUnq = document.getElementById(
      "choices-container-unq"
    );

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
      const questionContainerMc = document.getElementById(
        "question-container-mc"
      );
      const choicesContainerMc = document.getElementById(
        "choices-container-mc"
      );

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
    const selectedChoice = document.querySelector(
      'input[name="choice"]:checked'
    );
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

    resultElement.textContent =
      "Vous avez " +
      correctAnswers +
      " réponses correctes sur " +
      (questionsUniques.length + questionsMultiples.length) +
      ".";

    if (correctAnswers <= 7) {
      alert("Manman ou fèb réésayé pli ta !");
      return;
    } else if (correctAnswers <= 21) {
      alert("Ou ka défann kow mai sa pa sufisan");
      return;
    } else if (correctAnswers > 22) {
      alert("Ou cé en réel antillais boug mwen !");
      return;
    }
  }

  //fonction qui compare le nombre de questions répondu et le nombre de questions qu'il reste à répondre
  function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  function compteurQuestion() {
    const compteurQuestionElement =
      document.getElementById("compteur-question");
    let compteur = 0;

    // Compter les réponses pour les questions uniques
    userAnswersUnq.forEach((answer) => {
      if (answer !== undefined) {
        compteur++;
      }
    });

    // Compter les réponses pour les questions multiples
    userAnswersMc.forEach((answer) => {
      if (answer !== undefined) {
        compteur++;
      }
    });

    compteurQuestionElement.textContent =
      "Questions répondues " +
      compteur +
      " sur " +
      (questionsUniques.length + questionsMultiples.length) +
      " le total de questions";
  }
  // Initialiser le questionnaire
  compteurQuestion();
  loadQuestion();
});
