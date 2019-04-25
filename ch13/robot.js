function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}
Robot.prototype.maker = "ObjectsURus";
Robot.prototype.speak = function() {
  console.log("Hello");
}
Robot.prototype.makeCoffee = function() {
  console.log("Making coffee");
}
Robot.prototype.blinkLights = function() {
  console.log("Blinking");
}
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.OnOffSwitch = true;
robby.makeCoffee = function() {
  console.log("Fetching coffee from Starbucks");
}
rosie.cleanHouse = function() {
  console.log("Cleaning the house");
}

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year
+ " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year
+ " and is owned by " + rosie.owner);
rosie.cleanHouse();
