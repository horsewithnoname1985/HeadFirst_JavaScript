var passengers = [{
    name: "Jane Doloop",
    paid: true
  },
  {
    name: "Dr. Evel",
    paid: true
  },
  {
    name: "Sue Property",
    paid: false
  },
  {
    name: "John Funcall",
    paid: true
  }
];


function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    };
  }
  return true;
}

function checkNoFlyList(passenger) {
  return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
  return (!passenger.paid);
}

function printPassenger(passenger) {
  console.log(passenger.name);
  return false;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log("The plane can't take off: we have a passenger on the no-fly list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
}

processPassengers(passengers, printPassenger);
