var products = [{
    name: "Grapefruit",
    calories: 170,
    color: "red",
    sold: 8200
  },
  {
    name: "Orange",
    calories: 160,
    color: "orange",
    sold: 12101
  },
  {
    name: "Cola",
    calories: 210,
    color: "caramel",
    sold: 25412
  },
  {
    name: "Diet Cola",
    calories: 0,
    color: "caramel",
    sold: 43922
  },
  {
    name: "Lemon",
    calories: 200,
    color: "clear",
    sold: 14983
  },
  {
    name: "Raspberry",
    calories: 180,
    color: "pink",
    sold: 9427
  },
  {
    name: "Root Beer",
    calories: 200,
    color: "caramel",
    sold: 9909
  },
  {
    name: "Water",
    calories: 0,
    color: "clear",
    sold: 62123
  }
]

// sort in ascending order
function compareSold(colaA, colaB) {
  return colaA.sold - colaB.sold;
}

//sort in ascending order
function compareCalories(colaA, colaB) {
  return colaA.calories - colaB.calories;
}

// sort in ascending order
function compareColor(colaA, colaB) {
  return compareString(colaA.color, colaB.color);
}

// sort in ascending order
function compareName(colaA, colaB) {
  return compareString(colaA.name, colaB.name)
}

function compareString(stringA, stringB) {
  for (var i = 0; i < stringA.length && i < stringB.length; i++) {
    if (stringA.charCodeAt(i) > stringB.charCodeAt(i)) {
        return 1;
      } else if (stringA.charCodeAt(i) === stringB.charCodeAt(i)) {
        continue;
      } else {
        return -1;
      }
  }
  if (stringA.length > stringB.length) {
    return 1;
  } else {
    return -1;
  }
}

function printProducts(products) {
  for (var i = 0; i < products.length; i++) {
    console.log("Name " + products[i].name +
      ", Calories: " + products[i].calories +
      ", Color: " + products[i].color +
      ", Sold: " + products[i].sold);
  }
}

sold_sorted_products = products.sort(compareSold);
console.log("Products sorted by sold amount:");
printProducts(sold_sorted_products);

calories_sorted_products = products.sort(compareCalories);
console.log("Products sorted by calories:");
printProducts(calories_sorted_products);

name_sorted_products = products.sort(compareName);
console.log("Products sorted by name:");
printProducts(name_sorted_products);

color_sorted_products = products.sort(compareColor);
console.log("Products sorted by color:");
printProducts(color_sorted_products);
