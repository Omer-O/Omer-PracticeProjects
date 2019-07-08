const fs = require('fs');
const fullPath = __dirname;

function logSizes(fullPath) {
    fs.readdir(fullPath, { writeFileTypes: true}, (err, files) => {
        if(err) {
            console.log(err);
        }
        for (var i = 0; i < files.length; i++) {
            if (files[i].isFile()) {
                fs.stat(fullPath + "/", (err, stat) => {
                    if(err) {
                        console.log(err);
                    }
                    console.log(fullPath + "/" + files[i].name + " : " + stat.size);
                    if (files[i].isDirectory()) {
                        logSizes(fullPath + "/" + files[i].name);
                    }
                });
            }
         }
    });
}
logSizes(fullPath);
