function Dog(name, bread, weight) {
  this.name = name;
  this.breed = bread;
  this.weight = weight;
  this.bark = function() {
    if (this.weight > 25) {
      alert(this.name + " says Woof!");
    } else {
      alert(this.name + " says Yip!");
    }
  };
}

function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;

  this.start = function() {
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };

  this.drive = function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoom zoom");
    } else {
      console.log("Start the engine first");
    }
  };
}

var limoParams = {
  make: "Webvill Motors",
  model: "limo",
  year: 1983,
  color: "black",
  passenger: 12,
  convertible: true,
  mileage: 21120
};

var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);