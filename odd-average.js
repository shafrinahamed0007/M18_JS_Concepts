/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

/**
 *
 * 1. put odd numbers in an array
 */

function oddAverage(numbers) {
  let odd = [];
  for (number of numbers) {
    // console.log(number);
    if (number % 2 === 1) {
      odd.push(number);
    }
  }

  // odds is the array that contain only the odd numbers
  let sum = 0;
  for (let number of odd) {
    sum = sum + number;
  }
  const length = odd.length;
  const average = sum / length;
  return average;
}

const numbers = [42, 13, 58, 65, 81];
const average = oddAverage(numbers);
console.log("Average of the odd numbers is: ", average);
