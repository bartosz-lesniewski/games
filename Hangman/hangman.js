import {
    Quote
} from './quote.js'

class Game {
    quotes = [{
            text: "pan tadeusz",
            category: "Utwór literacki",
        },
        {
            text: "janko muzykant",
            category: "Utwór literacki",
        },
        {
            text: "akademia pana kleksa",
            category: "Film",
        },
        {
            text: "ogniem i mieczem",
            category: "Film",
        },
    ];
    constructor({
        outputWrapper,
        wordWrapper,
        categoryWrapper,
        lettersWrapper
    }) {
        this.outputWrapper = outputWrapper
        this.wordWrapper = wordWrapper
        this.categoryWrapper = categoryWrapper
        this.lettersWrapper = lettersWrapper

        const {
            text,
            category
        } = this.quotes[Math.floor(Math.random() * this.quotes.length)]
        this.categoryWrapper = category
        this.quote = new Quote(text)
    }

    drawLetters() {
        for (let i = 0; i < 26; i++) {
            const letter = (i + 10).toString(36)
            const btnLetter = document.createElement('button')
            btnLetter.innerHTML = letter
            this.lettersWrapper.appendChild(btnLetter)
            btnLetter.addEventListener('click', () => {
                console.log(letter)
            })
        }
    }

    drawQuote() {
        const txt = this.quote.getText()
        this.wordWrapper.innerHTML = txt
    }

    start() {
        this.drawLetters()
        this.drawQuote()
    }
}

const game = new Game({
    outputWrapper: document.getElementById('output'),
    wordWrapper: document.getElementById('word'),
    categoryWrapper: document.getElementById('category'),
    lettersWrapper: document.getElementById('letters')
})

game.start()