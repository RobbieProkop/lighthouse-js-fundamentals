// const whichSchool = function (age) {
//   if (age < 13) {
//     return "Elementary School";
//   } else if (age >= 13 && age <= 18) {
//     return "Secondary School";
//   } else {
//     return "Lighthouse Labs";
//   }
// };

// console.log(whichSchool(21));

// loopy lighthouse challenge
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

// odd checker

// let isOdd = function (num) {
//   return num % 2 === 1;
// };

// console.log(isOdd(21));

// console.log("3 is odd: " + isOdd(3));
// console.log("8 is odd: " + isOdd(8));

// // voting station calculation
// const stations = [
//   ["Big Bear Donair", 10, "restaurant"],
//   ["Bright Lights Elementary", 50, "school"],
//   ["Moose Mountain Community Centre", 45, "community centre"],
// ];

// const chooseStations = function (stations) {
//   const goodStations = [];
//   for (const station of stations) {
//     const name = station[0];
//     const capacity = station[1];
//     if (capacity >= 20) {
//       const type = station[2];
//       if (type === "school" || type === "community centre") {
//         goodStations.push(name);
//       }
//     }
//   }

//   return goodStations;
// };

// console.log(chooseStations(stations));

//x marks the spot challenge
const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let positionX = 0;
  let positionY = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      positionY++;
    } else if (moves[i] === "south") {
      positionY--;
    } else if (moves[i] === "west") {
      positionX--;
    } else if (moves[i] === "east") {
      positionX++;
    }
  }
  return [positionX, positionY];
};
console.log(finalPosition(moves));

// AGE CALCULATOR

const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
};

console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

// HOW MANY HUNDREDS?

const howManyHundreds = function (bottles) {
  let containers = 0;
  if (bottles / 100 < 1) {
    return containers;
  } else if (bottles / 100 >= 1) {
    if (bottles % 100 === 0) {
      containers += bottles / 100;
    } else if (bottles % 100 != 0) {
      containers += Math.floor(bottles / 100);
    }
  }
  return containers;
};
// console.log(howManyHundreds(1000));
// console.log(howManyHundreds(894));
// console.log(howManyHundreds(520));
// console.log(howManyHundreds(99));
// console.log(howManyHundreds(0));

// AREA CALCULATORS

const calculateRectangleArea = function (length, width) {
  const rectangle = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  }
  return rectangle;
};

const calculateTriangleArea = function (base, height) {
  const triangle = (base * height) / 2;
  if (base < 0 || height < 0) {
    return undefined;
  }
  return triangle;
};

const calculateCircleArea = function (radius) {
  const circle = Math.PI * (radius * radius);
  if (radius < 0) {
    return undefined;
  }
  return circle;
};

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));
//62.83185307179586
//21.991148575128552
