const http = require("http");
const querystring = require("querystring");
var chalk = require("chalk");

http.createServer((request, response) => {
    request.on("error", err => {
        console.log("err: ", err);
        process.exit();
    });
    response.on("error", err => {
        console.log("err: ", err);
        process.exit();
    });

    if (request.method == "GET") {
        response.setHeader("content-type", "text/html");
        response.statusCode = 200;
        response.write(`
                <!doctype html>
                <html>
                <title>Colors</title>
                <form method="POST">
                  <input type="text" name="text">
                  <select name="color">
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                    <option value="gray">gray</option>
                    <option value="magenta">magenta</option>
                    <option value="cyan">cyan</option>
                  </select>
                  <button type="submit">Go</button>
                </form>
                </html>
            `);
        response.end("");
    } else if (request.method == "POST") {
        let data = "";
        request.on("data", chunk => {
            data += chunk;
        });
        request.on("end", received => {
            const queryVars = querystring.parse(data);
            console.log(chalk[queryVars.color](queryVars.text));
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.write(`
                <!doctype html>
                <html>
                <title>${queryVars.text}</title>
                <a href="/" style="color:${queryVars.color}">${
                queryVars.text
            }</a>
                </html>
            `);
            response.end();
        });
    }
}).listen(8080, () => console.log("listeing..."));
