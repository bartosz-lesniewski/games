export class Ui {
    UiSelectors = {
        board: '[data-board]',
        cell: '[data-cell]'
    }
    getElement(element) {
        return document.querySelector(element)
    }
    getElements(elements) {
        return document.querySelectorAll(elements)
    }
}