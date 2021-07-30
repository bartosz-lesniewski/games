class Game {
  colors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
    { color: 'green' },
    // { color: 'magenta' },
    // { color: 'khaki' },
    // { color: 'salmon' },
    // { color: 'pink' },
    // { color: 'indigo' },
  ];

  constructor({ leftContainer, middleContainer, rightContainer }) {
    this.leftContainer = leftContainer;
    this.middleContainer = middleContainer;
    this.rightContainer = rightContainer;

    this.index;
  }

  start() {
    document
      .querySelector('.spin')
      .addEventListener('click', this.spinEventListener);
  }

  randomColors = (e) => {
    // e.preventDefault();
    let left, middle, right;
    for (let i = 0; i <= 2; i++) {
      if (i == 0) {
        left = Math.floor(Math.random() * this.colors.length);
        this.leftContainer.style.backgroundColor = this.colors[`${left}`].color;
      } else if (i == 1) {
        middle = Math.floor(Math.random() * this.colors.length);
        this.middleContainer.style.backgroundColor =
          this.colors[`${middle}`].color;
      } else {
        right = Math.floor(Math.random() * this.colors.length);
        this.rightContainer.style.backgroundColor =
          this.colors[`${right}`].color;
      }
    }
    if (left == middle && middle == right) {
      this.win();
    } else {
      this.lose();
    }
  };

  win() {
    console.log('brawo, wygrałeś');
  }

  lose() {
    console.log('przegrałeś!');
  }

  spinEventListener = (e) => {
    e.preventDefault();
    // e = e.target.value;
    const input = document.querySelector('.bid');

    if (input !== '') {
      this.randomColors();
    } else {
      console.log('nie ma' + e);
    }
  };
}

const game = new Game({
  leftContainer: document.querySelector('.left__container'),
  middleContainer: document.querySelector('.middle__container'),
  rightContainer: document.querySelector('.right__container'),
});

game.start();
