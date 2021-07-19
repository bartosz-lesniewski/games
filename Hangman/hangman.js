import {
    Quote
} from './quote.js'

class Game {

    quotes = [{
        text: 'y tu mama tambien',
        category: 'film'
    }, {
        text: 'z szynka raz',
        category: 'książka'
    }, {
        text: 'everybodys gotta live',
        category: 'piosenka'
    }, {
        text: 'a ci, ktorzy tanczyli, zostali uznani za szalonych przez tych, ktorzy nie słyszeli muzyki',
        category: 'cytat'
    }, {
        text: 'tomasz michniewicz',
        category: 'pisarz'
    }]

    constructor({
        outputWrapper,
        wordWrapper,
        categoryWrapper,
        lettersWrapper
    }) {
        this.outputWrapper = outputWrapper;
        this.wordWrapper = wordWrapper;
        this.categoryWrapper = categoryWrapper;
        this.lettersWrapper = lettersWrapper;

        const {
            text,
            category
        } = this.quotes[Math.floor(Math.random() * this.quotes.length)]
        this.categoryWrapper.innerHTML = category
        this.quote = new Quote(text)
    }

    answer(letter, e) {
        e.target.disabled = true
        if (this.quote.answer(letter)) {
            this.initQuote()
        }
    }

    initLetters() {
        for (let i = 0; i < 26; i++) {
            const letter = (i + 10).toString(36)
            const btnLetter = document.createElement('button')
            btnLetter.innerHTML = letter
            this.lettersWrapper.appendChild(btnLetter)
            btnLetter.addEventListener('click', (e) => this.answer(letter, e))
        }
    }

    initQuote() {
        const content = this.quote.getText()
        this.wordWrapper.innerHTML = content

        console.log(content)
    }

    start() {
        this.initLetters()
        this.initQuote()
    }
}

const game = new Game({
    outputWrapper: document.getElementById('output'),
    wordWrapper: document.getElementById('word'),
    categoryWrapper: document.getElementById('category'),
    lettersWrapper: document.getElementById('letters')
})

game.start()