const raining = true;
const cold = false;
if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Wear your jacket!");
} else {
  console.log("Short sleeves are fine.");
}

const temperature = 55;

if (temperature < 0) {
  console.log("Make sure to wear your jacket.");
} else if (temperature < 15) {
  console.log("Short Sleeves might be chilly.");
} else {
  console.log("Short sleeves will be just fine.");
}

if (!raining) {
  console.log("You won't need a rain jacket.");
}

console.log("You are ready to go outside.");

//   Logical Operators

const isCitizen = true;
const age = 27;

if (isCitizen && age > 18) {
  console.log("You are legally an adult.");
}

if (temperature < -40 || temperature > 40) {
  console.log("It's probably best to stay inside.");
}
