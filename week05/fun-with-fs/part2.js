const fs = require("fs");

const input = process.argv[2];
if (!input) {
    process.exit();
}

function mapSizes(direcotryFullPath) {
    var obj = {};
    const myFiles = fs.readdirSync(direcotryFullPath, { withFileTypes: true });
    if (myFiles) {
        myFiles.forEach(item => {
            const fullPath = direcotryFullPath + "/" + item.name;
            if (item.isFile()) {
                obj[item.name] = fs.statSync(fullPath).size;
            } else {
                obj[item.name] = mapSizes(fullPath);
            }
        });
    }
    return obj;
}

fs.writeFileSync(
    __dirname + "/exercise2-results.json",
    JSON.stringify(mapSizes(input), null, 4)
);
