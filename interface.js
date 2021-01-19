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
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
