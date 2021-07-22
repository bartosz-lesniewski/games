import {
    Ui
} from './ui.js'

export class Cell extends Ui {
    constructor(column, row) {
        super()
        this.column = column
        this.row = row
        this.hintValue = 0
        this.isMine = false
        this.isReveal = false
        this.isFlaged = false
        this.selector = `[data-column='${this.column}'][data-row='${this-row}']`
        this.element = null;
    }

    createElement() {
        const element = `<div class-'cell border border--concave' data-cell data-column='${this.column}' data-row='${this.row}'></div>`
        return element
    }
}