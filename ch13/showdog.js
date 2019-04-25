function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function() {
  if (this.weight > 25) {
    console.log(this.name + " says Woof!");
  } else {
    console.log(this.name +  " says Yip!");
  }
};

Dog.prototype.run = function() {
  console.log("Run!");
};

Dog.prototype.wag = function() {
  console.log("Wag!");
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
  if(this.sitting) {
    console.log(this.name + " is already sitting");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting");
  }
};

function ShowDog(name, breed, weight, handler) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.handler = handler;
}

ShowDog.prototype = new Dog();

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() {
  console.log("Stack");
};
ShowDog.prototype.bait = function() {
  console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
  console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
  console.log("Groom");
};

// So far, I can also do this without putting methods and properties
// into the ShowDog's prototype object (see below)

// function ShowDog(name, breed, weight) {
//   this.prototype = new Dog();
//
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//
//   this.league = "Webville";
//   this.stack = function() {
//     console.log("Stack");
//   };
//   this.bait = function() {
//     console.log("Bait");
//   };
//   this.gait = function(kind) {
//     console.log(kind + "ing");
//   };
//   this.groom = function() {
//     console.log("Groom");
//   };
// }

var scotty =  new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);
