const fs = require('fs');
const myPath = __dirname + "/projects";

function createHtml () {
    fs.readdir(myPath, { writeFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
            proccess.exit();
        }
        let htmlList = `<!DOCTYPE html><html lang="en" dir="ltr"><head><meta charset="utf-8"><title>Projects</title></head><body><section>`;
        for ( let i = 0; i < files.length; i++) {
            htmlList += `<div><a href="${files[i].name}/">${files[i].name}</a></div>`;
        }
        htmlList += `</section></body></html>`;
        return htmlList;
    });
}
module.exports.createHtml = createHtml;
