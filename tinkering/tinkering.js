// let balance = 0.0;
// let isActive = false;
// let checkBalance = true;

// //checks to see balance or not

// if (checkBalance === false) {
//   console.log("Thank you. Have a nice day!");
// }

// // if yes, is the account active?
// if (checkBalance === true) {
//   if (isActive === true && balance > 0) {
//     console.log("Your balance is $" + balance.toFixed(2) + ".");
//   } else if (isActive === false) {
//     console.log("Your account is no longer active.");
//   } else if (isActive === true && balance === 0) {
//     console.log("Your account is empty.");
//   } else if (isActive === true && balance.toFixed(2) < 0) {
//     console.log("Your balance is negative. Please contact bank.");
//   }
// }

// let flavor = "chocolate";
// let vessel = "cone";
// let toppings = "sprinkles";

// if (
//   (flavor === "chocolate" || flavor === "vanilla") &&
//   (vessel === "cone" || vessel === "bowl") &&
//   (toppings === "sprinkles" || toppings === "peanuts")
// ) {
//   console.log(
//     "I'd like two scoops of " +
//       flavor +
//       " ice cream in a " +
//       vessel +
//       " with " +
//       toppings +
//       "."
//   );
// }

// let shirtWidth = 21;
// let shirtLength = 29.5;
// let shirtSleeve = 8.51;

// if (
//   shirtWidth >= 18 &&
//   shirtWidth < 20 &&
//   shirtLength >= 28 &&
//   shirtLength < 29 &&
//   shirtSleeve >= 8.13 &&
//   shirtSleeve < 8.38
// ) {
//   console.log("S");
// } else if (
//   shirtWidth >= 20 &&
//   shirtWidth < 22 &&
//   shirtLength >= 29 &&
//   shirtLength < 30 &&
//   shirtSleeve >= 8.38 &&
//   shirtSleeve < 8.63
// ) {
//   console.log("M");
// } else if (
//   shirtWidth >= 22 &&
//   shirtWidth < 24 &&
//   shirtLength >= 30 &&
//   shirtLength < 31 &&
//   shirtSleeve >= 8.63 &&
//   shirtSleeve < 8.88
// ) {
//   console.log("L");
// } else if (
//   shirtWidth >= 24 &&
//   shirtWidth < 26 &&
//   shirtLength >= 31 &&
//   shirtLength < 33 &&
//   shirtSleeve >= 8.88 &&
//   shirtSleeve < 9.63
// ) {
//   console.log("XL");
// } else if (
//   shirtWidth >= 26 &&
//   shirtWidth < 28 &&
//   shirtLength >= 33 &&
//   shirtLength < 34 &&
//   shirtSleeve >= 9.63 &&
//   shirtSleeve < 10.13
// ) {
//   console.log("2XL");
// } else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
//   console.log("3XL");
// } else {
//   console.log("N/A");
// }

// if (6) {
//   console.log("the value is truthy");
// } else {
//   console.log("the value is falsy");
// }

// let isGoing = true;
// let color;

// // if (isGoing) {
// //   color = "green";
// // } else {
// //   color = "red";
// // }
// // console.log(color);

// color = !isGoing ? "green" : "red";
// console.log(color);

// let newCity = "Calgary";
// let oldCity = "Bangkok";
// let moving = true;

// console.log(
//   moving
//     ? "Enjoy your move from " + oldCity + " to " + newCity + "."
//     : "Keep enjoying " + oldCity + "."
// );

// let category;
// let eatsPlants = false;
// let eatsAnimals = false;

// eatsPlants && !eatsAnimals
//   ? (category = "herbivore")
//   : eatsPlants && eatsAnimals
//   ? (category = "omnivore")
//   : !eatsPlants && eatsAnimals
//   ? (category = "carnivore")
//   : (category = "undefined");

// category = eatsPlants
//   ? eatsAnimals
//     ? "omnivore"
//     : "herbivore"
//   : eatsAnimals
//   ? "carnivore"
//   : "undefined";

// console.log(category);

// let salary = "";
// let education = "a Bachelor's degree";

// switch (education) {
//   case "no high school diploma":
//     salary += 25636;
//     break;
//   case "a high school diploma":
//     salary += 35256;
//     break;
//   case "an Associate's degree":
//     salary += 41496;
//     break;
//   case "a Bachelor's degree":
//     salary += 59124;
//     break;
//   case "a Master's degree":
//     salary += 69732;
//     break;
//   case "a Professional degree":
//     salary += 89960;
//     break;
//   case "a Doctoral degree":
//     salary += 84396;
//     break;
// }

// console.log(
//   "In 2015, a person with " +
//     education +
//     " earned an average of $" +
//     salary.toLocaleString("en-US") +
//     "/year."
// );

// // WHIle loop

// // let x = 1;
// // console.log(x);
// // x = x + 1;

// // while (x <= 100) {
// //   console.log(x);
// //   x = x + 1;
// // }

// // let start = 0;
// // while (start <= 10) {
// //   console.log(start);
// //   start = start + 2;
// // }

// // x = 10;
// // while (x <= 25) {
// //   console.log("Printing x = " + x);
// //   x = x + 2;
// // }

// // let x = 0;
// // let y = 3;
// // let z = 5;
// // while (x <= 20) {
// //   if (x % y === 0 && x % z === 0) {
// //     console.log("Yulia Prokop");
// //   } else if (x % y === 0) {
// //     console.log("Yulia");
// //   } else if (x % z === 0) {
// //     console.log("Prokop");
// //   } else {
// //     console.log(x);
// //   }
// //   x = x + 1;
// // }

// // while (x / 5) {
// //   console.log("Prokop");
// //   x = x + 1;
// // }

// // while (x / 3 && x / 5) {
// //   console.log("Yulia Prokop");
// //   x = x + 1
// // }

// // while (!x/3 || !x/5) {
// //   console.log(x)
// //   x = x + 1
// // }

// let num = 99;
// while (num >= 1) {
//   if (num === 1) {
//     console.log(
//       num +
//         " bottle of juice on the wall! " +
//         num +
//         " bottle of juice! Take one down, pass it around...  " +
//         (num - 1) +
//         " bottles of juice on the wall!"
//     );
//   } else if (num === 2) {
//     console.log(
//       num +
//         " bottles of juice on the wall! " +
//         num +
//         " bottles of juice! Take one down, pass it around... " +
//         (num - 1) +
//         " bottle of juice on the wall!"
//     );
//   } else {
//     console.log(
//       num +
//         " bottles of juice on the wall! " +
//         num +
//         " bottles of juice! Take one down, pass it around... " +
//         (num - 1) +
//         " bottles of juice on the wall!"
//     );
//   }
//   num = num - 1;
// }

// let nasaCountdown = 60;

// while (nasaCountdown >= 0) {
//   if (nasaCountdown === 0) {
//     console.log("Solid rocket booster ignition and liftoff!");
//   } else if (nasaCountdown === 6) {
//     console.log("Main engine start");
//   } else if (nasaCountdown === 10) {
//     console.log("Activate main engine hydrogen burnoff system");
//   } else if (nasaCountdown === 16) {
//     console.log("Activate launch pad sound suppression system");
//   } else if (nasaCountdown === 31) {
//     console.log("Ground launch sequencer is go for auto sequence start");
//   } else if (nasaCountdown === 50) {
//     console.log("Orbiter transfers from ground to internal power");
//   } else {
//     console.log("T-" + nasaCountdown + " seconds");
//   }
//   nasaCountdown = nasaCountdown - 1;
// }

// // for loops

// // for (let i = 0; i < 10; i = i + 1) {
// //   console.log(i);
// // }

// // nested loops

// // for (let x = 0; x < 5; x = x + 1) {
// //   for (let y = 0; y < 3; y = y + 1) {
// //     console.log(x + "," + y);
// //   }
// // }

// // for (let x = 9; x >= 1; x--) {
// //   console.log("hello " + x);
// // }

// // for (x = 5; x < 10; x++) {
// //   console.log(x);
// // }

// let solution = 1;

// for (let i = 1; i <= 12; i++) {
//   solution *= i;
// }

// console.log(solution);

// for (let i = 0; i <= 25; i++) {
//   for (let x = 0; x <= 99; x++) {
//     console.log(i + "," + x);
//   }
// }

// // loopy lighthouse challenge
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 === 0 && i % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (i % 3 === 0) {
//     console.log("Loopy");
//   } else if (i % 4 === 0) {
//     console.log("Lighthouse");
//   } else {
//     console.log(i);
//   }
// }

let amounts = [61.0, 52.25, 112.99, 5.0];

// regular for loop to loop through total amounts

// let total = 0;
// for (let i = 0; i < amounts.length; i++) {
//   total += amounts[i];
// }
// console.log("Order total is ", total);

// newer for of loop

let total = 0;
for (let amount of amounts) {
  total += amount;
}

console.log("Order total is: ", total);

// FUNCTIONS

// how to reverse a string.
function reverseString(reverseMe) {
  let reversed = "";
  for (let i = reverseMe.length - 1; i >= 0; i--) {
    reversed += reverseMe[i];
  }
  return reversed;
}
console.log(reverseString("Robbie"));

function findAverage(x, y) {
  let answer = (x + y) / 2;
  return answer;
}

let avg = findAverage(5, 9);
console.log(avg);

// function laugh() {
//   let joke = "hahahahahahahahahaha!";
//   return joke;
// }

// console.log(laugh());

// function laugh(num) {
//   let ha = "";
//   for (let i = 0; i < num; i++) {
//     ha = ha + "ha";
//   }
//   ha = ha + "!";
//   return ha;
// }

// console.log(laugh(3));

function isThisWorking(input) {
  console.log(
    "Printing: isThisWorking was called and " +
      input +
      " was passed in as an argument."
  );
  return "Returning: I am returning this string";
}

isThisWorking(3);

// sayHi("Robbie");
// function sayHi(name) {
//   console.log(greeting + " " + name);
//   let greeting = "Hello";
// }

// MAKE A TRIANGLE

function makeLine(length) {
  let line = "";
  for (let i = 1; i <= length; i++) {
    line += " *";
  }
  return line + "\n";
}
console.log(makeLine(3));

// builds square!
// function buildTriangle(length) {
//   let triangle = "";
//   for (let x = 1; x <= length; x++) {
//     triangle += makeLine(length);
//   }
//   return triangle;
// }

// builds triangle top large to bottom small on Left

// function buildTriangle(length) {
//   let triangle = "";
//   for (let x = length; x >= 1; x--) {
//     triangle += makeLine(x);
//   }
//   return triangle;
// }

// console.log(buildTriangle(6));

// build triangle start on left, top small  bottom big

// function buildTriangle(length) {
//   let triangle = "";
//   for (let x = 1; x <= length; x++) {
//     triangle += makeLine(x);
//   }
//   return triangle;
// }

// console.log(buildTriangle(6));

// build triangle start on right, top small bottom big
function buildTriangle(length) {
  let space = "";
  for (let x = 1; x <= length; x++) {
    space += makeLine(x);
  }
  return space;
}

// console.log(buildTriangle(6));

function buildTriangle(length) {
  let line = "";
  for (let line = "*"; line.length <= 10; line += "*") console.log(line);
  return line;
}

console.log(buildTriangle(6));

let catSays = function (max) {
  let catMessage = "";
  for (let i = 0; i < max; i++);
  {
    catMessage += "meow";
  }
  return catMessage;
};

function helloCat(callBackFunc) {
  return "hello " + callBackFunc(5);
}
console.log(helloCat(catSays));

// inline functions

function trainDog(trainingFunction, name) {
  trainingFunction(name);
}
trainDog(function bella(command) {
  console.log("Bella, I want you to" + command);
}, " sit!");

let laugh = function (num) {
  repeatHa = "";
  for (let i = 0; i < num; i++) {
    repeatHa += "ha";
  }
  return repeatHa;
};

console.log(laugh(3));

let cry = function babyCry() {
  return "boohoo!";
};
console.log(cry());

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2) + "!");
}

emotions("happy", function laugh(num) {
  repeatHa = "";
  for (let i = 0; i < num; i++) {
    repeatHa += "ha";
  }
  return repeatHa;
});

// MORE FUNCTIONS

// const sayHello = function () {
//   console.log("Hello, world");
// };

// sayHello();

const sayHello = function (name) {
  console.log("Hello " + name);
};

let greeting = sayHello("Robbie");
console.log(greeting);
