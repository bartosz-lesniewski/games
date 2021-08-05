const topLeftWrapper = document.body.querySelector('.top__left');
const topRightWrapper = document.body.querySelector('.top__right');
const bottomWrapper = document.body.querySelector('.bottom');

const content = [
  {
    game: 'Hangman',
    image:
      '<a href="https://bartosz-lesniewski.github.io/games/Hangman/hangman.html"><img  class=\'bottom__img\' src="https://bartosz-lesniewski.github.io/games/Hangman/images/okladka.png" alt="Game picture"></a>',
    gameInfo:
      "<h2 class='top__h2'>- Click on the image to start play,</br>- Game is version 1.0.0 - so its completed :)</br>- You have 8 lives</br></h2><h3>Have a fun! :)</h3>",
  },
  {
    game: 'Saper',
    image:
      '<a href="https://bartosz-lesniewski.github.io/games/Saper/saper.html"><img class=\'bottom__img\' src="https://bartosz-lesniewski.github.io/games/Saper/images/okladka.png" alt="Game picture"></a>',
    gameInfo:
      "<h2 class='top__h2'>- Click on the image to start play,</br>- game is alpha version, you can flag (orange), find field without mine (green) or find mine (red)</br>- mines is random every time</br></h2><h3>Have a fun! :)</h3>",
  },
  {
    game: 'One Armed Bandit',
    image:
      '<a href="https://bartosz-lesniewski.github.io/games/One Armed Bandit/index.html"><img class=\'bottom__img\' src="https://bartosz-lesniewski.github.io/games/One Armed Bandit/okladka.png" alt="Game picture"></a>',
    gameInfo:
      "<h2 class='top__h2'>- Click on the image to start play,</br>- game is in beta </br>- You can play, win money or loose all of it.</br></h2><h3>Have a fun! :)</h3>",
  },
];

let contentIndex = 0;

const changeLeft = () => {
  if (contentIndex == 0) {
    contentIndex = content.length - 1;
  } else {
    contentIndex--;
  }
  changeContent();
};

const changeRight = () => {
  if (contentIndex == content.length - 1) {
    contentIndex = 0;
  } else {
    contentIndex++;
  }
  changeContent();
};

const addButtons = () => {
  topLeftWrapper.innerHTML = `<h1 class='top__h1'>${content[contentIndex].game}</h1> <button class='top__btn-back'> Zmień grę! <- </button> <button class='top__btn-forward'> Zmień Grę! -> </button>`;
};

const changeImage = () => {
  bottomWrapper.innerHTML = content[contentIndex].image;
};

const changeGameInfo = () => {
  topRightWrapper.innerHTML = content[contentIndex].gameInfo;
};

const eventListeners = () => {
  document
    .querySelector('.top__btn-back')
    .addEventListener('click', changeLeft);
  document
    .querySelector('.top__btn-forward')
    .addEventListener('click', changeRight);
};

const changeContent = () => {
  addButtons();
  changeImage();
  changeGameInfo();
  eventListeners();
};

changeContent();
