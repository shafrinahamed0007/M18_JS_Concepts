// 12 inch = 1feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

// ignore this one
function inchToFeet2(inch) {
  const feetToInch = inch / 12;
  const feetNumber = parseInt(feetToInch);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch .";
  return result;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

const shuvoHeight2 = inchToFeet2(75);
console.log("Shovo Height:",shuvoHeight2);


// example: miles to kilometer convert

function to_kilometer(miles){
    const kilometer = miles * 1.60;
    return kilometer;

}

const dhakaToNoakhali = 108.12;
const distance = to_kilometer(dhakaToNoakhali);
console.log("Dhaka to Noakhali Distance:", distance, "KM");

// kilometer to miles convert

function to_miles(km){
    let miles = km/1.60;
    let result = "Noakhali to Dhaka Distance" + " " + miles + " miles ";
    return result;

}

const nokahliToDhaka = 173;
const distance1 = to_miles
(nokahliToDhaka);
console.log(distance1);
