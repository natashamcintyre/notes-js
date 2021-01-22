class Mock {
  constructor() {
    this.method = {}
  }

  addMethod(method, response) {
    this.method[method] = response
  }
}


function describe(string, myCallback) {
  console.log(string)
  myCallback();
}

function it(string, myCallback) {
  console.log(string)
  try {
    myCallback();
  }
  catch(error) {
    console.log(error)
  }
}

function clickOn(element) {
  document.getElementById(element).click();
}

function fillIn(element, text) {
  document.getElementById(element).value = text;
}

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion !FAILED!: " + assertionToCheck + " is not truthy");
    }
    else {
      console.log("Assertion passed: " + assertionToCheck + " is truthy")
    }
  },
  equalTo: function(paramOne, paramTwo) {
    if(paramOne != paramTwo) {
      throw new Error("Assertion !FAILED!: " + paramOne + " is not equal to " + paramTwo);
    }
    else {
      console.log("Assertion passed: " + paramOne + " is equal to " + paramTwo)
    }
  },
  throwError: function(methodToCheck) {
    var catchCalled = false
    try {
      methodToCheck();
    }
    catch(error) {
      catchCalled = true
      console.log("Assertion passed: " + methodToCheck + " did throw an error")
    }
    if(catchCalled == false) {
      throw new Error("Assertion !FAILED!: " + methodToCheck + " did not throw an error")
    }
  },
  pageContains: function(text) {
      if (window.find(text)) {
        console.log("Assertion passed: " + text + " found on page")
      } else {
        throw new Error("Assertion !FAILED!: " + text + " not found")
      }
  }
};
