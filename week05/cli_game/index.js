const readline = require("readline");
const chalk = require("chalk");
const story = require("./story.json");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(obj) {
    rl.question(chalk.red(obj.q), answer => {
        if (obj.a[answer]) {
            if (typeof obj.a[answer] == "object") {
                ask(obj.a[answer]);
            } else if (typeof obj.a[answer] == "string") {
                console.log(obj.a[answer]);
                rl.close();
            } else {
                ask(obj.a[answer]);
                rl.close();
            }
        } else {
            console.log("wrong answer, try again");
            ask(obj.a[answer]);
        }
    });
}

ask(story);
