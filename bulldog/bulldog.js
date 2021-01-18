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
  }
};