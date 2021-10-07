// Async Drills

// Create log message function
function logMessage(message) {
  console.log(message);
}

// Call log message
logMessage("asdadaFsfsdfsf");

// Call log message in a set timeout
setTimeout(() => {
  logMessage("Hello World");
}, 2000);

// Create getWords function
function getWords() {
  console.log("Alien");

  setTimeout(() => {
    console.log("Xenu");
  }, 3000);

  setTimeout(() => {
    console.log("Snail");
  }, 2000);

  setTimeout(() => {
    console.log("Blanket");
  }, 1000);
}

getWords();

// Callbacks

function countdown(num) {
  setTimeout(() => {
    if (num > 0) {
      console.log(num);
      countdown(num - 1);
    } else {
      console.log("done!");
    }
  }, 1000);
}

countdown(5);

// Promises

const lunchTime = true;

function orderMeSomeFood() {
  return new Promise((resolve, reject) => {
    if (lunchTime) {
      const favoriteFoodAndDrink = {
        food: "Pizza",
        drink: "Water",
      };
      resolve(favoriteFoodAndDrink);
    } else {
      const noLunch = new Error("No lunch");
      reject(noLunch);
    }
  });
}

orderMeSomeFood()
  .then((response) => {
    console.log(`Favorite food: ${response.food}`);
    console.log(`Favorite drink: ${response.drink}`);
  })
  .catch((err) => {
    console.log(err);
  });
