// Closure within the checkAccount() local scope
function checkAccount() {
  var password = "mypassword";
  var passwordGuess = "myotherpassword";

  function makePassword(password) {
    return function attemptLogin(passwordGuess) {
      return (passwordGuess === password);
    };
  }
  return makePassword(password);
}

var check = checkAccount();
console.log(check());

// Closure within global scope
function multN(n) {
  return function multiplyWith(number) {
    return number * n;
  };
}

var multBy5 = multN(5);
console.log("Multiplying 2: " + multBy5(2));

// Variation of counter
function Counter() {
  var count = 0;

  return {
    increment: function() {
      count++;
      return count;
    }
  };
}

var counter = Counter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
