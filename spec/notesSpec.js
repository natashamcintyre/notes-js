describe('Notes', function() {

  var notes = new Notes();

  it('.all - initialises as an empty array', function() {
    var array = []
    assert.equalTo(notes.all().length, array.length)
  })
})