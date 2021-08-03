const topLeftWrapper = document.body.querySelector('.top__left');
const topRightWrapper = document.body.querySelector('.top__right');
const bottomWrapper = document.body.querySelector('.bottom');

const content = [
  {
    game: 'Wisielec',
    image:
      '<a href="https://bartosz-lesniewski.github.io/games/Hangman/hangman.html"><img  class=\'bottom__img\' src="https://bartosz-lesniewski.github.io/games/Hangman/images/okladka.png" alt="Game picture"></a>',
    gameInfo:
      "<h2 class='top__h2'>- Kliknij w obrazek aby włączyć grę</br>- Early access nie bierze pod uwagę znaków diaktrycznych, weź to pod uwagę :)</br>- Masz 8 żyć</br></h2><h3>Baw się dobrze :)</h3>",
  },
  {
    game: 'Saper',
    image:
      '<a href="https://bartosz-lesniewski.github.io/games/Saper/saper.html"><img class=\'bottom__img\' src="https://bartosz-lesniewski.github.io/games/Saper/images/okladka.png" alt="Game picture"></a>',
    gameInfo:
      "<h2 class='top__h2'>- Kliknij w obrazek aby włączyć grę</br>- gra w wersji Alpha, jak trafisz na minę, to gra zwróci czerwone tło w tym miejscu. </br>- Można grać, wygrać lub przegrać, ale obecna wersja nie podpowiada ile min jest przy danym polu</br></h2><h3>Baw się dobrze :)</h3>",
  },
  {
    game: 'One Armed Bandit',
    image:
      '<a href="https://bartosz-lesniewski.github.io/games/One Armed Bandit/index.html"><img class=\'bottom__img\' src="https://bartosz-lesniewski.github.io/games/One Armed Bandit/okladka.png" alt="Game picture"></a>',
    gameInfo:
      "<h2 class='top__h2'>- Kliknij w obrazek aby włączyć grę</br>- gra w wersji Beta. </br>- Można grać, wygrać lub przegrać, obecna wersja nie podlicza statystyk, reszta działa jak należy :)</br></h2><h3>Baw się dobrze :)</h3>",
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
