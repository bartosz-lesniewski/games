class Game {
  colors = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
    // { color: 'yellow' },
    // { color: 'magenta' },
    // { color: 'khaki' },
    // { color: 'salmon' },
    // { color: 'pink' },
    // { color: 'indigo' },
  ];

  constructor({ leftContainer, middleContainer, rightContainer, walletSpan }) {
    this.leftContainer = leftContainer;
    this.middleContainer = middleContainer;
    this.rightContainer = rightContainer;
    this.walletSpan = walletSpan;

    this.currentMoney;
  }

  start() {
    this.currentMoney = 100;
    this.walletSpan.textContent = this.currentMoney;
    document
      .querySelector('.spin')
      .addEventListener('click', this.spinEventListener);
  }

  randomColors = (input) => {
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
      this.win(input);
    } else {
      this.lose(input);
    }
  };

  win(input) {
    console.log('brawo, wygrałeś');
    input = input * 3;
    this.currentMoney = this.currentMoney + input;
    this.walletSpan.textContent = this.currentMoney;
  }

  lose(input) {
    console.log('przegrałeś!');
    this.currentMoney = this.currentMoney - input;
    this.walletSpan.textContent = this.currentMoney;
    if (this.currentMoney <= 0) {
      alert('go home, you have no more money');
      document
        .querySelector('.spin')
        .removeEventListener('click', this.spinEventListener);
    }
  }

  // wallet(input) {
  //   // this.walletSpan.textContent = this.currentMoney - input;
  // }

  spinEventListener = (e) => {
    e.preventDefault();
    let input = document.querySelector('.bid');
    input = input.value;
    if (isNaN(input) || input == '') {
      alert('you need to make a bid first');
    } else {
      this.randomColors(input);
    }
  };
}

const game = new Game({
  leftContainer: document.querySelector('.left__container'),
  middleContainer: document.querySelector('.middle__container'),
  rightContainer: document.querySelector('.right__container'),
  walletSpan: document.querySelector('.wallet__span'),
});

game.start();
