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
        this.placeMines()

        this.cellsElements = this.getElements(this.UiSelectors.cell)
        this.eventListeners()
    }

    handleElements() {
        this.board = this.getElement(this.UiSelectors.board)
    }

    placeMines() {
        let mines = this.minesNumber

        while (mines) {
            const rowIndex = this.randomNumber(0, this.rowsNumber - 1)
            const columnIndex = this.randomNumber(0, this.columnsNumber - 1)
            const cell = this.cells[rowIndex][columnIndex]
            const alreadyMine = cell.alreadyMine

            if (!alreadyMine) {
                cell.addMine()
                mines--
            }
        }
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    generateCells() {
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

    cellContextMenu = (e) => {
        e.preventDefault()
        const cellClicked = e.target;
        const rowIndex = parseInt(cellClicked.getAttribute('data-row'), 10);
        const columnIndex = parseInt(cellClicked.getAttribute('data-column'), 10);
        const cell = this.cells[rowIndex][columnIndex];
        const cellFlagged = cell.addFlag()

        if (!cellFlagged === true) {
            return cellClicked.classList.toggle('cell--is-flag')
        }
    }

    eventListeners() {
        this.cellsElements.forEach(event => event.addEventListener('click', this.getCellClick))
        this.cellsElements.forEach(e => e.addEventListener('contextmenu', this.cellContextMenu))
    }

    getCellClick = (e) => {
        const cellClicked = e.target;
        const rowIndex = parseInt(cellClicked.getAttribute('data-row'), 10);
        const columnIndex = parseInt(cellClicked.getAttribute('data-column'), 10);
        const cell = this.cells[rowIndex][columnIndex];

        if (cell.alreadyMine === true) {
            cellClicked.classList.add('bombs')
            document.querySelector('h1').textContent = 'BOOM! Trafiłeś na bombę i przegrałeś!'
            return
            // } else if () {

        } else {
            cellClicked.classList.add('survived')
        }
    }
}

const game = new Game()

game.start()