export class Quote {
    constructor(text) {
        this.text = text
        this.picked = []
    }
    getText() {
        let content = ''
        for (const char of this.text) {
            if (char == ' ' || this.picked.includes(char)) {
                content += char
            } else {
                content += '_'
            }
        }
        return content
    }

    pick(letter) {
        if (!this.text.includes(letter)) {
            return false
        }
        this.picked.push(letter)
        return true
    }
}