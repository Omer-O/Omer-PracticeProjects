// let's make a text-based adventure game!
// your game should work as follows:
//
// When started, it should greet the player and ask them if they want to start.
// When the player confirms, it should start asking the player questions, displaying the available options if appropriate.
// It should react appropriately to the user's input. Your game shouldn't crash when the user input is something unexpected!
// Once the game is complete, the program should end.
const readline = require("readline");
const chalk = require("chalk");
const story = require("./story.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(obj) {
  rl.question(chalk.yellow(obj.q), answer => {
    if (obj.answers[answer]) {
      if (obj.answers[answer].q) {
        ask(obj.answers[answer]);
      }
    } else {
      rl.close(); //this is closing the program
    }
  });
}
ask(story);
