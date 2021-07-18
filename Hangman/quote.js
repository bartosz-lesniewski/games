export class Quote {
    constructor({
        text
    }) {
        this.text = text
    }
    getText() {
        const content = ''
        for (const char of this.text) {
            if (char == ' ') {
                content += char
            } else {
                content += '_'
            }
        }
        return content
    }
}