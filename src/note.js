class Note {
  constructor() {
    this.text = ""
  }

  addText(text) {
    this.text = text;
  }

  shortText() {
    return (this.text.substring(0, 20) + ' ...')
  }


}
