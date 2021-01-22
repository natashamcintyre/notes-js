setTimeout(function() {
  describe("user can create a new note", function() {
  it("turns up on the page", function() {
    fillIn('text', 'This is my new note!!!!');
    clickOn('new-note');
    setTimeout(function() { assert.pageContains('This is my new note!') }, 3000);
  })
});
}, 3000)
