class MainPage {
    content = [{
        game: 'Wisielec',
        image: `<a href="./Hangman/hangman.html"><img class='hangman' src="./Hangman/images/okladka.png" alt="Game picture"></a>`,
        gameInfo: `<h2>- Kliknij w obrazek aby włączyć grę</br>- Early access nie bierze pod uwagę znaków diaktrycznych, weź to pod uwagę :)</br>- Masz 8 żyć</br></h2><h3>Baw się dobrze :)</h3>`
    }, {
        game: 'Saper',
        image: `<a href="./Saper/saper.html"><img class='hangman' src="./Hangman/images/okladka.png" alt="Game picture"></a>`,
        gameInfo: `<h2>- Kliknij w obrazek aby włączyć grę</br>- gra w wersji Alpha, jak trafisz na minę, to gra zwróci czerwone tło w tym miejscu. </br>- Można grać, wygrać lub przegrać, ale obecna wersja nie podpowiada ile min jest przy danym polu</br></h2><h3>Baw się dobrze :)</h3>`
    }]

    constructor({
        topWrapper,
        bottomWrapper,
        mainWrapper
    }) {
        this.topWrapper = topWrapper;
        this.bottomWrapper = bottomWrapper;
        this.mainWrapper = mainWrapper;
    }

    contentIndex = 0
    // content functions

    changeLeft = () => {
        if (this.contentIndex === 0) {
            this.contentIndex = this.content.length - 1
        } else {
            this.contentIndex--
        }
        console.log(this.contentIndex)
    }

    changeRight = () => {
        if (this.contentIndex === this.content.length - 1) {
            this.contentIndex = 0
        } else {
            this.contentIndex++
        }
        console.log(this.contentIndex)
    }

    addButtons() {
        this.topWrapper.innerHTML = `<button class='leftBtn'> <- Zmień grę! </button> <h1>${this.content[this.contentIndex].game}</h1> <button class='rightBtn'> Zmień Grę! -> </button>`
    }

    changeImage() {
        this.mainWrapper.innerHTML = this.content[this.contentIndex].image
    }

    changeGameInfo() {
        this.bottomWrapper.innerHTML = this.content[this.contentIndex].gameInfo
    }

    // end content stuff
    eventListeners() {
        document.querySelector('.leftBtn').addEventListener('click', this.changeLeft)
        document.querySelector('.rightBtn').addEventListener('click', this.changeRight)
    }


    changeContent() {
        this.addButtons()
        this.changeImage()
        this.changeGameInfo()
        this.eventListeners()
    }

    start() {
        this.changeContent()
    }
}

const mainPage = new MainPage({
    topWrapper: document.body.querySelector('.topWrapper'),
    bottomWrapper: document.body.querySelector('.bottomWrapper'),
    mainWrapper: document.body.querySelector('.mainWrapper')
})

mainPage.start()