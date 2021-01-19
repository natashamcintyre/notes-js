class Notes {

  constructor() {
    this.allNotes = []
  }

  all() {
    return this.allNotes
  }

  add(note) {
    this.allNotes.push(note)
  }

}