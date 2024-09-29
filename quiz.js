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
