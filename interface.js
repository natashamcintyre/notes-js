var notes = new Notes();

window.onload = function() {
  retrieveNotes()
  updateList(notes)
}

function updateText(note) {
  document.getElementById('note').textContent = note.text;
}

function updateList(notes) {
  document.getElementById('note-list').innerHTML = ""
  notes.all().forEach(function(note, index) {
    let listLink = document.createElement('a');
    let listItem = document.createElement('li');
    listLink.href = '#' + index
    listLink.id = 'note' + index
    getEmojis(note.shortText(), listLink.id)
    listItem.appendChild(listLink)
    document.getElementById('note-list').appendChild(listItem)
  })
}

document.getElementById('new-note').onclick = function() {
  var myNote = new Note();
  var text = document.getElementById('text').value;
  myNote.addText(text);
  notes.add(myNote)
  updateList(notes)
  noteToStorage()
  document.getElementById("text").value = "";
}

window.addEventListener("hashchange", function() {
  let id = window.location.hash.split("#")[1];
  display(notes.all()[id]);
})

function display(note) {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  var body = note.text
  getEmojis(body, "modal-text")
  document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
    history.replaceState(null, null, ' ');
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      history.replaceState(null, null, ' ');
    }
  }
}

function getEmojis(body, id) {
  fetch('https://makers-emojify.herokuapp.com/', {
    method: 'POST',
    body: JSON.stringify({ text: body}),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
    response.json().then(function(data) {
      document.getElementById(id).innerHTML = data.emojified_text;
    });
  })
}

function noteToStorage() {
  localStorage.setItem("notes", JSON.stringify(notes.all()))
}

function retrieveNotes() {
  console.log(`retrieving notes`)
  var retrieveStorage = JSON.parse(localStorage.notes)
  for (let i = 0; i < retrieveStorage.length; i++) {
    let note = new Note()
    note.addText(retrieveStorage[i].text)
    notes.add(note)
  }
}
