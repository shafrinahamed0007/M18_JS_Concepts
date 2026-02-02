/**
 * array has some duplicate elements
 */

const birayanikhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(arrays) {
  console.log(arrays);
  const unique = [];
  for (const array of arrays) {
    if (unique.includes() === false) {
      unique.push(array);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(birayanikhor);
const uniqueNumber = noDuplicate(numbers);
console.log(uniqueArray);
console.log(uniqueNumber);
