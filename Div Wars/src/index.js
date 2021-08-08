import { Space } from './stars.js';

export class Game {
  userShipPosition = 50;
  enemyShipPosition = 50;
  getInnerWidth = self.innerWidth - 210;
  getInnerHeight = self.innerHeight;
  flagHit = false;

  constructor({ enemyShip, userShip }) {
    this.enemyShip = enemyShip;
    this.userShip = userShip;
  }
  moveEnemyShip(e) {
    let flag = false;

    setInterval(() => {
      if (this.enemyShipPosition < this.getInnerWidth && flag === false) {
        this.enemyShipPosition++;
        this.enemyShip.style.left = this.enemyShipPosition + 'px';

        if (this.enemyShipPosition === this.getInnerWidth) {
          flag = true;
        }
      } else {
        this.enemyShipPosition--;
        this.enemyShip.style.left = this.enemyShipPosition + 'px';
        if (this.enemyShipPosition === 50 && flag === true) flag = false;
      }
      e = this.enemyShipPosition;
    }, 1);
  }

  shootUserShip(e) {
    let shoot;
    if (e.which === 38) {
      shoot = document.createElement('div');
      let bulletMove = 100;
      shoot.classList.add('user-ship--shoot');
      shoot.style.left = this.userShipPosition + 21 + 'px';
      const page = document.querySelector('.page');
      page.appendChild(shoot);

      setInterval(() => {
        bulletMove += 2;
        shoot.style.bottom = bulletMove + 'px';
        if (bulletMove > this.getInnerHeight) {
          shoot.remove();
        } else if (bulletMove === this.enemyShipPosition) {
          shoot.remove();
        }
      }, 1);
    }
  }

  moveUserShip(e) {
    if (e.which === 37 && this.userShipPosition >= 50) {
      this.userShipPosition -= 15;
      this.userShip.style.left = this.userShipPosition + 'px';
    } else if (e.which === 39 && this.userShipPosition <= this.getInnerWidth) {
      this.userShipPosition += 15;
      this.userShip.style.left = this.userShipPosition + 'px';
    }
    // console.log(e.which);
  }

  controlUserShip(e) {
    this.moveUserShip(e);
    this.shootUserShip(e);
  }

  start() {
    this.moveEnemyShip();

    document.addEventListener('keydown', (e) => {
      this.controlUserShip(e);
    });
  }
}

const game = new Game({
  userShip: document.querySelector('.user-ship'),
  enemyShip: document.querySelector('.enemy-ship'),
});

game.start();
