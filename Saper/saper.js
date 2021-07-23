import {
    Ui
} from './Ui.js'

class Game extends Ui {
    board = null
    minefieldSize = 64
    minesNumber = 10

    boardArrangement() {
        for (let i = 0; i < 10; i++) {
            const allFields = document.querySelectorAll('.mineBox')
            allFields[Math.floor(Math.random() * 64)].classList.add('bombs')
        }
    }

    fieldsCreator() {
        for (let i = 0; i < this.minefieldSize; i++) {
            const fieldGenerator = document.createElement(`div`)
            fieldGenerator.classList.add("mineBox")
            this.board.appendChild(fieldGenerator)
        }
    }
    handleElements() {
        this.board = this.getElement(this.UiSelectors.board)
    }

    minesPlaceInCells() {
        let minesToPlace = this.minesNumber
        // while (minesToPlace) {

        // }
    }

    start() {
        this.handleElements()
        this.fieldsCreator()
        this.boardArrangement()
        this.minesPlaceInCells()
    }
}

const game = new Game()

game.start()