import {
    Ui
} from './Ui.js'

import {
    Cell
} from './cell.js'

class Game extends Ui {
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

    rowsNumber = null
    columnsNumber = null
    minesNumber = null

    cells = []
    cellsElements = null
    board = null

    start() {
        this.handleElements();
        // this.setCellsValue();
        this.cellsElements = this.getElements(this.UiSelectors.cell);
        this.newGame()
    }

    newGame(
        rows = this.config.easy.rows,
        columns = this.config.easy.columns,
        mines = this.config.easy.mines
    ) {
        this.rowsNumber = rows;
        this.columnsNumber = columns;
        this.minesNumber = mines;

        this.generateCells()
        this.boardArrangement()

        this.cellsElements = this.getElements(this.UiSelectors.cell)
    }

    handleElements() {
        this.board = this.getElement(this.UiSelectors.board)
    }

    // setCellsValue(cell) {
    //     let mines = 0
    // }

    generateCells() {
        this.cells.length = 0;
        for (let row = 0; row < this.rowsNumber; row++) {
            this.cells[row] = [];
            for (let column = 0; column < this.columnsNumber; column++) {
                this.cells[row].push(new Cell(column, row))
            }
        }
    }

    boardArrangement() {
        this.cells.flat().forEach((cell) => {
            this.board.insertAdjacentHTML('beforeend', cell.createElement());
            cell.element = cell.getElement(cell.selector)
        })
    }
}

const game = new Game()

game.start()