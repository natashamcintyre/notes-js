describe('Note', function() {

  var note = new Note();

  it('Adds text to note', function() {
    note.addText('blah, blah, blah')
    assert.equalTo(note.text, 'blah, blah, blah')
  })
})