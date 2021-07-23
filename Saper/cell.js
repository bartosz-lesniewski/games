import {
    Ui
} from './ui.js'

export class Cell extends Ui {
    constructor(x, y) {
        super();
        this.x = x
        this.y = y
        this.selector = `[data-x="${this.x}"][data-y="${this.y}"]`
        this.element = null
    }

    createElement() {
        const element = `<div class='mineBox' data-cell data-column='${this.x}' data-row='${this.y}'></div>`
        return element
    }
}