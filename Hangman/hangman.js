import {
    Quote
} from './quote.js'

class Game {
    currentLife = 0
    lastLife = 8

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
        text: 'a ci ktorzy tanczyli, zostali uznani za szalonych przez tych ktorzy nie slyszeli muzyki',
        category: 'cytat'
    }, {
        text: 'tomasz michniewicz',
        category: 'pisarz'
    }]

    constructor({
        outputWrapper,
        wordWrapper,
        categoryWrapper,
        lettersWrapper,
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

    getImg() {
        document.querySelector('div.life').innerHTML = `<img src=\'./images/${this.currentLife + 1}.png'>`
    }

    answer(letter, e) {
        e.target.disabled = true
        if (this.quote.answer(letter)) {
            this.initQuote()
        } else {
            this.currentLife++
            this.getImg()
            if (this.currentLife == this.lastLife) {
                this.loose()
            }
            console.log(this.currentLife)
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
        if (!content.includes('_')) {
            this.win();
        }
    }

    start() {
        this.getImg()
        this.initLetters()
        this.initQuote()
    }

    win() {
        this.wordWrapper.style.color = 'green'
        this.wordWrapper.innerHTML = "Brawo! Wygrywasz!!!"
    }

    loose() {
        this.wordWrapper.style.color = 'red'
        this.wordWrapper.innerHTML = "Porażka, tym razem szczęście Ci nie sprzyjało! Spróbuj ponownie!!!"
    }
}

const game = new Game({
    outputWrapper: document.getElementById('output'),
    wordWrapper: document.getElementById('word'),
    categoryWrapper: document.getElementById('category'),
    lettersWrapper: document.getElementById('letters')
})

game.start()