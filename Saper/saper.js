import {
    Cell
} from './cell.js'

import {
    Ui
} from './ui.js'

class Game extends Ui {
    // constructor()
    config = {
        easy: {
            rows: 8,
            columns: 8,
            mines: 10
        },
        normal: {
            rows: 16,
            columns: 16,
            mines: 40
        },
        expert: {
            rows: 16,
            columns: 30,
            mines: 99
        }
    }

    numberOfRows = null
    numberOfColumns = null
    numberOfMines = null

    cells = []

    board = null

    initGame() {
        this.handleELements()
        this.newGame()
        console.log('dziala')
    }

    newGame(rows = this.config.easy.rows, columns = this.config.easy.columns, mines = this.config.easy.mines) {
        this.numberOfRows = rows
        this.numberOfColumns = columns
        this.numberOfMines = mines

        this.generateCells()
        this.renderBoard()
    }

    handleELements() {
        this.board = this.getElement(this.UiSelectors.board)
    }

    generateCells() {
        for (let row = 0; row < this.numberOfRows; row++) {
            this.cells[row] = []
            for (let columns = 0; columns < this.numberOfColumns; columns++) {
                this.cells[row].push(new Cell(column, row))
            }
        }
    }
    renderBoard() {
        this.cells.flat().forEach(cell => {
            this.board.insertAdjacentHTML('beforeend', cell.createElement())
            cell.element = cell.getElement
        })
    }
}

const game = new Game()
game.initGame()