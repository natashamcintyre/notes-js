describe("Describe block:", function() {

  it("testing the isTrue test", function () {
    assert.isTrue(9 === 10);
  })

  it("testing the equalTo test", function () {
    assert.equalTo(10, 10);
  })

  function errorTest(){
    throw new Error("test error")
  }

  function errorTestTwo() {
    return 3
  }

  it("testing the throwError test - throwing an error", function(){
    assert.throwError(errorTest)
  })

  it("testing the throwError test - not throwing an error", function(){
    assert.throwError(errorTestTwo)
  })

  it("testing the mocks - can stub a method", function(){
    var mock = new Mock();
    mock.addMethod('stub', 'stubResponse')
    console.log(mock.method['stub'])
  })

})