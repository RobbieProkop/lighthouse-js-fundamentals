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
