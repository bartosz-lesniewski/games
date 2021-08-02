import { Quote } from './quote.js';

class Game {
  currentLife = 0;
  lastLife = 8;

  quotes = [
    {
      text: 'Y TU MAMA TAMBIEN',
      category: 'movie',
    },
    {
      text: 'HAM ON RYE',
      category: 'book',
    },
    {
      text: 'EVERYBODYS GOTTA LIVE',
      category: 'song',
    },
    {
      text: 'STIEG LARSSON',
      category: 'writer',
    },
  ];

  constructor({ outputWrapper, wordWrapper, categoryWrapper, lettersWrapper }) {
    this.outputWrapper = outputWrapper;
    this.wordWrapper = wordWrapper;
    this.categoryWrapper = categoryWrapper;
    this.lettersWrapper = lettersWrapper;

    const { text, category } =
      this.quotes[Math.floor(Math.random() * this.quotes.length)];
    this.categoryWrapper.innerHTML = category;
    this.quote = new Quote(text);
  }

  getImg() {
    document.querySelector(
      '.output'
    ).innerHTML = `<img class='output__image' src=\'./images/${
      this.currentLife + 1
    }.png'>`;
  }

  answer(letter, e) {
    e.target.disabled = true;
    if (this.quote.answer(letter)) {
      this.initQuote();
    } else {
      this.currentLife++;
      this.getImg();
      if (this.currentLife == this.lastLife) {
        this.loose();
      }
      console.log(this.currentLife);
    }
  }

  initLetters() {
    for (let i = 0; i < 26; i++) {
      const letter = (i + 10).toString(36).toUpperCase();
      const btnLetter = document.createElement('button');
      btnLetter.classList.add('main__button');
      btnLetter.innerHTML = letter.toUpperCase();
      this.lettersWrapper.appendChild(btnLetter);
      btnLetter.addEventListener('click', (e) => this.answer(letter, e));
    }
  }

  initQuote() {
    const content = this.quote.getText();
    this.wordWrapper.innerHTML = content;
    if (!content.includes('_')) {
      this.win();
    }
  }

  start() {
    this.getImg();
    this.initLetters();
    this.initQuote();
  }

  win() {
    this.wordWrapper.style.color = 'green';
    this.wordWrapper.innerHTML = 'Brawo! Wygrywasz!!!';
  }

  loose() {
    this.wordWrapper.style.color = 'red';
    this.wordWrapper.innerHTML =
      'Porażka, tym razem szczęście Ci nie sprzyjało! Spróbuj ponownie!!!';
  }
}

const game = new Game({
  outputWrapper: document.querySelector('.output'),
  wordWrapper: document.querySelector('.main__word'),
  categoryWrapper: document.querySelector('.main__category'),
  lettersWrapper: document.querySelector('.main__letters'),
});

game.start();
