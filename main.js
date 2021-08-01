const topWrapper = document.body.querySelector('.topWrapper');
const bottomWrapper = document.body.querySelector('.bottomWrapper');
const mainWrapper = document.body.querySelector('.mainWrapper');

const content = [
  {
    game: 'Wisielec',
    image:
      '<a href="https://bartosz-lesniewski.github.io/games/Hangman/hangman.html"><img class=\'hangman\' src="https://bartosz-lesniewski.github.io/games/Hangman/images/okladka.png" alt="Game picture"></a>',
    gameInfo:
      '<h2>- Kliknij w obrazek aby włączyć grę</br>- Early access nie bierze pod uwagę znaków diaktrycznych, weź to pod uwagę :)</br>- Masz 8 żyć</br></h2><h3>Baw się dobrze :)</h3>',
  },
  {
    game: 'Saper',
    image:
      '<a href="https://bartosz-lesniewski.github.io/games/Saper/saper.html"><img class=\'saper\' src="https://bartosz-lesniewski.github.io/games/Saper/images/okladka.png" alt="Game picture"></a>',
    gameInfo:
      '<h2>- Kliknij w obrazek aby włączyć grę</br>- gra w wersji Alpha, jak trafisz na minę, to gra zwróci czerwone tło w tym miejscu. </br>- Można grać, wygrać lub przegrać, ale obecna wersja nie podpowiada ile min jest przy danym polu</br></h2><h3>Baw się dobrze :)</h3>',
  },
  {
    game: 'One Armed Bandit',
    image:
      '<a href="https://bartosz-lesniewski.github.io/games/One Armed Bandit/index.html"><img class=\'oab\' src="https://bartosz-lesniewski.github.io/games/One Armed Bandit/okladka.png" alt="Game picture"></a>',
    gameInfo:
      '<h2>- Kliknij w obrazek aby włączyć grę</br>- gra w wersji Beta. </br>- Można grać, wygrać lub przegrać, obecna wersja nie podlicza statystyk, reszta działa jak należy :)</br></h2><h3>Baw się dobrze :)</h3>',
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
  topWrapper.innerHTML = `<button class='leftBtn'> <- Zmień grę! </button> <h1>${content[contentIndex].game}</h1> <button class='rightBtn'> Zmień Grę! -> </button>`;
};

const changeImage = () => {
  mainWrapper.innerHTML = content[contentIndex].image;
};

const changeGameInfo = () => {
  bottomWrapper.innerHTML = content[contentIndex].gameInfo;
};

const eventListeners = () => {
  document.querySelector('.leftBtn').addEventListener('click', changeLeft);
  document.querySelector('.rightBtn').addEventListener('click', changeRight);
};

const changeContent = () => {
  addButtons();
  changeImage();
  changeGameInfo();
  eventListeners();
};

changeContent();
