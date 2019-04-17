var numbersArray = [60, 50, 62, 58, 54, 54];
numbersArray.sort(compareNumbers);
console.log(numbersArray);

function compareNumbers(num1, num2) {
  return num1-num2;
}
