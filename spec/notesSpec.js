describe('Notes', function() {

  var notes = new Notes();

  it('.all - initialises as an empty array', function() {
    var array = []
    assert.equalTo(notes.all().length, array.length)
  })

  it('.add - adds Note object to allNotes', function(){
    var note = new Mock();
    notes.add(note)
    assert.equalTo(notes.all()[0], note)
  })
})