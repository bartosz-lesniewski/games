class Game {

    quotes = [{
        title: 'y tu mama tambien',
        category: 'film'
    }, {
        title: 'z szynka raz',
        category: 'książka'
    }, {
        title: 'everybodys gotta live',
        category: 'piosenka'
    }, {
        title: 'a ci, ktorzy tanczyli, zostali uznani za szalonych przez tych, ktorzy nie słyszeli muzyki',
        category: 'cytat'
    }, {
        title: 'tomasz michniewicz',
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
    }

    initQuote() {
        const quote = this.quotes[Math.floor(Math.random() * this.quotes.length)]
        this.wordWrapper.innerHTML = quote.title
        this.categoryWrapper.innerHTML = quote.category
        console.log(quote)
    }

    initLetters() {
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