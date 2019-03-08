var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = randomLoc + 1;
var location3 = randomLoc + 2;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (Enter a number from 0 to 6): ")
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
  }
  if (guess == location1 || guess == location2 || guess == location3) {
    alert("HIT!");
    hits = hits + 1;
  } else {
    alert("MISS!");
  }
  if (hits == 3) {
    isSunk = true;
    alert("You sank my battleship!");
  }
}
var stats = "You took " + guesses + " guesses to sink the battleship, which " +
  "means your shooting accuracy was " + (3 / guesses * 100) + "%";
alert(stats)
