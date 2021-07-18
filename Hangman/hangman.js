class Game {
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

    start() {
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
}

const game = new Game({
    outputWrapper: document.getElementById('output'),
    wordWrapper: document.getElementById('word'),
    categoryWrapper: document.getElementById('category'),
    lettersWrapper: document.getElementById('letters')
})

game.start()