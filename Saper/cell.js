export class Cell {
    constructor(column, row) {
        this.column = column
        this.row = row
        this.hintValue = 0
        this.isMine = false
        this.isReveal = false
        this.isFlaged = false
        this.selector = `[data-column='${this.column}'][data-row='${this-row}']`
        this.element = null;
    }
}