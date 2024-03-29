export class Ui {
  UiSelectors = {
    board: '[data-board]',
    cell: '[data-cell]',
  };
  getElement(selector) {
    return document.querySelector(selector);
  }

  getElements(selector) {
    return document.querySelectorAll(selector);
  }
}
