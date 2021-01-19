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

console.log(document.getElementsByClassName('collapsible'));
document.getElementsByClassName('collapsible')[0].onclick = function () {
  var note = this.nextElementSibling;
  var content = note.nextElementSibling;
  this.classList.toggle("active")
  if (content.style.display === "block") {
    content.style.display = "none";
    note.style.display = 'block';
  } else {
    content.style.display = "block";
    note.style.display = 'none';
  }
}
