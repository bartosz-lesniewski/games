export class Quote {
    constructor(text) {
        this.text = text
    }
    getText() {
        let content = ''
        for (const letter of this.text) {
            if (letter == ' ') {
                content += letter
            } else {
                content += '_'
            }
        }
        return content
    }
}