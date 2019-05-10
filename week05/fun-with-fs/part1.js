const fs = require("fs");
const chalk = require("chalk");
const util = require("util");
// const { readdir, stat } = require("fs").promises;

let { readdir, stat } = require("fs");
const { promisify } = require("util");

readdir = promisify(readdir);
stat = promisify(stat);

const input = process.argv[2];
if (!input) {
    console.log("missing path inout");
    process.exit();
}

function logSizes(givenPath) {
    return readdir(givenPath, { withFileTypes: true })
        .then(files => {
            var arr = [];
            files.forEach(item => {
                const fullPath = givenPath + "/" + item.name;
                if (item.isFile()) {
                    arr.push(
                        stat(fullPath).then(function(fileStat) {
                            console.log(`${fullPath}: ${fileStat.size}`);
                        })
                    );
                } else {
                    arr.push(logSizes(fullPath));
                }
            });
            return Promise.all(arr);
            // console.log("array: ", arr);
        })
        .catch(err => {
            console.log(err);
        });
}

logSizes(input).then(() => console.log("done"));
