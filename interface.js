var notes = new Notes();
function updateText(note) {
  document.getElementById('note').textContent = note.text;
}
function updateList(notes) {
  document.getElementById('note-list').innerHTML = ""
  notes.all().forEach(function(note, index) {
    let listLink = document.createElement('a');
    let listItem = document.createElement('li');
    listLink.href = '#' + index
    listLink.innerHTML = note.shortText()
    listItem.appendChild(listLink)
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

window.addEventListener("hashchange", function() {
  let id = window.location.hash.split("#")[1];
  console.log(id);
  display(notes.all()[id]);
})

function display(note) {
  console.log(`I am in the display(note) function`)
  document.getElementById('displayed-note').innerHTML = note.text
}
