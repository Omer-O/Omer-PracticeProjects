
const readline = require('readline');
const chalk = require('chalk');
const story = require('./story.json');

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
            rl.close();//this is closing the program
        }
    });
}
ask(story);
