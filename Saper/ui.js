export class Ui {
    UiSelectors = {
        board: '[data-board]'
    }
    getElement(selector) {
        return document.querySelector(selector)
    }

    getElements(selector) {
        return document.querySelectorAll(selector)
    }
}