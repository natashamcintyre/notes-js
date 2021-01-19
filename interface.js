function updateText(note) {
  document.getElementById('note').textContent = note.text;
}
  // document.getElementById('note').innerHTML = note.text
// function newNote () {
//   var myNote = new Note();
//   return myNote
// }
  document.getElementById('new-note').onclick = function() {
    console.log('hello')
    // event.preventDefault();
    var myNote = new Note();
    var text = document.getElementById('text').value;
    myNote.addText(text);
    console.log(myNote)
    updateText(myNote);
  } 