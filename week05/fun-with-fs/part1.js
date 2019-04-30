const fs = require("fs");
const chalk = require("chalk");

const input = process.argv[2];
if (!input) {
    process.exit();
}

function logSizes(givenPath) {
    fs.readdir(givenPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        if (files) {
            files.forEach(item => {
                const fullPath = givenPath + "/" + item.name;
                if (item.isFile()) {
                    fs.stat(fullPath, (err, fileStat) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log(
                            chalk.yellow(`${fullPath}: ${fileStat.size}`)
                        );
                    });
                } else {
                    logSizes(fullPath);
                }
            });
        }
    });
}

logSizes(input);
