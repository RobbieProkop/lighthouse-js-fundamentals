let balance = 0.0;
let isActive = false;
let checkBalance = true;

//checks to see balance or not

if (checkBalance === false) {
  console.log("Thank you. Have a nice day!");
}

// if yes, is the account active?
if (checkBalance === true) {
  if (isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
  } else if (isActive === false) {
    console.log("Your account is no longer active.");
  } else if (isActive === true && balance === 0) {
    console.log("Your account is empty.");
  } else if (isActive === true && balance.toFixed(2) < 0) {
    console.log("Your balance is negative. Please contact bank.");
  }
}

let flavor = "chocolate";
let vessel = "cone";
let toppings = "sprinkles";

if (
  (flavor === "chocolate" || flavor === "vanilla") &&
  (vessel === "cone" || vessel === "bowl") &&
  (toppings === "sprinkles" || toppings === "peanuts")
) {
  console.log(
    "I'd like two scoops of " +
      flavor +
      " ice cream in a " +
      vessel +
      " with " +
      toppings +
      "."
  );
}

let shirtWidth = 21;
let shirtLength = 29.5;
let shirtSleeve = 8.51;

if (
  shirtWidth >= 18 &&
  shirtWidth < 20 &&
  shirtLength >= 28 &&
  shirtLength < 29 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve < 8.38
) {
  console.log("S");
} else if (
  shirtWidth >= 20 &&
  shirtWidth < 22 &&
  shirtLength >= 29 &&
  shirtLength < 30 &&
  shirtSleeve >= 8.38 &&
  shirtSleeve < 8.63
) {
  console.log("M");
} else if (
  shirtWidth >= 22 &&
  shirtWidth < 24 &&
  shirtLength >= 30 &&
  shirtLength < 31 &&
  shirtSleeve >= 8.63 &&
  shirtSleeve < 8.88
) {
  console.log("L");
} else if (
  shirtWidth >= 24 &&
  shirtWidth < 26 &&
  shirtLength >= 31 &&
  shirtLength < 33 &&
  shirtSleeve >= 8.88 &&
  shirtSleeve < 9.63
) {
  console.log("XL");
} else if (
  shirtWidth >= 26 &&
  shirtWidth < 28 &&
  shirtLength >= 33 &&
  shirtLength < 34 &&
  shirtSleeve >= 9.63 &&
  shirtSleeve < 10.13
) {
  console.log("2XL");
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log("3XL");
} else {
  console.log("N/A");
}

if (6) {
  console.log("the value is truthy");
} else {
  console.log("the value is falsy");
}

let isGoing = true;
let color;

// if (isGoing) {
//   color = "green";
// } else {
//   color = "red";
// }
// console.log(color);

color = !isGoing ? "green" : "red";
console.log(color);

let newCity = "Calgary";
let oldCity = "Bangkok";
let moving = true;

console.log(
  moving
    ? "Enjoy your move from " + oldCity + " to " + newCity + "."
    : "Keep enjoying " + oldCity + "."
);

let category;
let eatsPlants = false;
let eatsAnimals = false;

eatsPlants && !eatsAnimals
  ? (category = "herbivore")
  : eatsPlants && eatsAnimals
  ? (category = "omnivore")
  : !eatsPlants && eatsAnimals
  ? (category = "carnivore")
  : (category = "undefined");

category = eatsPlants
  ? eatsAnimals
    ? "omnivore"
    : "herbivore"
  : eatsAnimals
  ? "carnivore"
  : "undefined";

console.log(category);

let salary = "";
let education = "a Bachelor's degree";

switch (education) {
  case "no high school diploma":
    salary += 25636;
    break;
  case "a high school diploma":
    salary += 35256;
    break;
  case "an Associate's degree":
    salary += 41496;
    break;
  case "a Bachelor's degree":
    salary += 59124;
    break;
  case "a Master's degree":
    salary += 69732;
    break;
  case "a Professional degree":
    salary += 89960;
    break;
  case "a Doctoral degree":
    salary += 84396;
    break;
}

console.log(
  "In 2015, a person with " +
    education +
    " earned an average of " +
    salary.toLocaleString("en-US") +
    "/year."
);
