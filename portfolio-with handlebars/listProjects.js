const fs = require("fs");

function listProjects(path) {
    let arr = [];
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
        }
        for (let item in files) {
            console.log(item.name);
            arr.push(item.name);
        }
    });
    console.log(arr);
    return arr;
}

module.exports.listProjects = listProjects;
