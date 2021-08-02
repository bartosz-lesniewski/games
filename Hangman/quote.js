export class Quote {
  constructor(text) {
    this.text = text;
    this.answered = [];
  }

  getText() {
    let content = '';
    for (const letter of this.text) {
      if (letter == ' ' || this.answered.includes(letter)) {
        content += letter;
      } else {
        content += '_';
      }
    }
    return content;
  }

  answer(letter) {
    if (!this.text.includes(letter)) {
      return false;
    }
    this.answered.push(letter);
    return true;
  }
}
