var passengers = [{
    name: "Jane Doloop",
    paid: true,
    ticket: "coach"
  },
  {
    name: "Dr. Evel",
    paid: true,
    ticket: "firstclass"
  },
  {
    name: "Sue Property",
    paid: false,
    ticket: "premium"
  },
  {
    name: "John Funcall",
    paid: true,
    ticket: "coach"
  }
];

serverPassengers(passengers);

function serverPassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    serverCustomer(passengers[i]);
  };
}

function serverCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  var getDinnerOrderFunction = createDinnerOrder(passenger);
  getDrinkOrderFunction();
  getDinnerOrderFunction();
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  // show movie
  getDrinkOrderFunction();
  // pick up trash
}

function createDinnerOrder(passenger) {
  var orderFunction;
  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      console.log("would you like chicken or pasta?")
    };
  } else if (passenger.ticket === "premium"){
    orderFunction = function() {
      console.log("would you like a snack box or cheese plate?")
    };
  } else {
    orderFunction = function() {
      console.log("nothing left except peanuts or pretzels, you cheapshit!");
    };
  }
  return orderFunction;
}

function createDrinkOrder(passenger) {
    var orderFunction;
    console.log("Dear " + passenger.name + ", ");
    if (passenger.ticket === "firstclass") {
      orderFunction = function() {
        console.log("would you like a cocktail or wine?");
      };
    } else if (passenger.ticket === "premium") {
      orderFunction = function() {
        console.log("would you like wine, cola or water?");
      };
    } else {
      orderFunction = function() {
        console.log("your choice is cola or water.");
      };
    }
    return orderFunction;
}

// function addN(n) {
//   var adder = function(x) {
//     return n + x;
//   };
//   return adder;
// }
//
// console.log(addN(10)(5));
