class MainPage {
    content = {
        game: ['Wisielec', 'Saper'],
        image: [`<a href="./Hangman/hangman.html"><img class='hangman' src="./Hangman/images/okladka.png" alt="Game picture"></a>`],
        gameInfo: [`<h2>- Kliknij w obrazek aby włączyć grę</br>- Early access nie bierze pod uwagę znaków diaktrycznych, weź to pod uwagę :)</br>- Masz 8 żyć</br></h2><h3>Baw się dobrze :)</h3>`]
    }

    constructor({
        topWrapper,
        bottomWrapper,
        mainWrapper
    }) {
        this.topWrapper = topWrapper;
        this.bottomWrapper = bottomWrapper;
        this.mainWrapper = mainWrapper;
    }

    addButtons() {
        this.topWrapper.innerHTML = `<button class='leftBtn'> <- Zmień grę! </button> <h1>${this.content.game[0]}</h1> <button class='rightBtn'> Zmień Grę! -> </button>`
    }

    changeImage() {
        this.mainWrapper.innerHTML = this.content.image[0]
    }

    changeGameInfo() {
        this.bottomWrapper.innerHTML = this.content.gameInfo[0]
    }

    start() {
        this.addButtons()
        this.changeImage()
        this.changeGameInfo()
    }
}

const mainPage = new MainPage({
    topWrapper: document.body.querySelector('.topWrapper'),
    bottomWrapper: document.body.querySelector('.bottomWrapper'),
    mainWrapper: document.body.querySelector('.mainWrapper')
})

mainPage.start()