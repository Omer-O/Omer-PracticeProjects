var fs = require("fs");

function generateHtml() {
    let list = fs.readdirSync(__dirname + "/projects", { withFileTypes: true });
    console.log("list from module: ", list);
    var liList = "";
    list.forEach(item => {
        if (!item.isFile()) {
            liList += `<li><a href="/${item.name}">${item.name}</a>\n`;
        }
    });

    const htmlContent = `
        <!doctype html>
        <html>
        <title>Portfolio</title>
        <p>Portfolio items</p>
            <ul>
                ${liList}
            </ul>
        </html>
        `;
    return htmlContent;
}

module.exports.generateHtml = generateHtml;
