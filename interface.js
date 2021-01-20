var notes = new Notes();
function updateText(note) {
  document.getElementById('note').textContent = note.text;
}
function updateList(notes) {
  document.getElementById('note-list').innerHTML = ""
  notes.all().forEach(function(note, index) {
    listItem = document.createElement('li');
    listItem.id = 'note' + index
    listItem.innerHTML = note.shortText()
    document.getElementById('note-list').appendChild(listItem)
  })
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
    notes.add(myNote)
    updateList(notes)
  } 