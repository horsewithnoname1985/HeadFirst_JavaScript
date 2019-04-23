function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;
  this.toString = function() {
    if (ounces > 12) {
      size = "large";
    } else {
      size = "medium";
    }
    return("You've ordered a " + size + " " + this.roast + " coffee.");
  }
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());
