const fs = require("fs");

const input = process.argv[2];
if (!input) {
    process.exit();
}

function mapSizes(direcotryFullPath) {
    var Obj = {};
    const myFiles = fs.readdirSync(direcotryFullPath, { withFileTypes: true });
    if (myFiles) {
        for (var item in myFiles) {
            const fullPath = direcotryFullPath + "/" + myFiles[item].name;
            if (myFiles[item].isFile()) {
                Obj[myFiles[item].name] = fs.statSync(fullPath).size;
            } else {
                Obj[myFiles[item].name] = mapSizes(fullPath);
            }
        }
    }
    return Obj;
}

fs.writeFileSync(
    __dirname + "/exercise2-results.json",
    JSON.stringify(mapSizes(input), null, 4)
);
