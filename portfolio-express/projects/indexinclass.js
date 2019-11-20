const http = require('http');
const fs = require('fs');
const path = require('path');

//before reading the server we sholud read the dir and detarmin if file or directory. and than we beuild an
//obj map {} with the path.
//our request listener suppose to read a key and if



http.createServer((req, res) => {

    if (req.method != 'GET') {
        res.statusCode = 405;
        res.end();
        return;
    }
    //approach: in the request listener we check to see if something
    //is corrispond with the path.
    const myPath = path.normalize(__dirname + '/projects/' + req.url);
    if (!myPath.startsWith(__dirname + '/projects/')) {//this we do to protect our directories, so noone cannot access our dafolders
        res.statusCode = 403;
        res.end();
        return;
    }

    fs.stat(myPath, (err, status) => {
        //if we get an err we send a 404.
            //if not we need tot detarmin if a file or a folder.
                    //with a MODULE called PATH in node. path
                //if a file we pipe it out!
            //if a directory - we need to serve the index.html within the directory.
                        //I need to change all my .html to index.html
                    //if we do not have index.html this we will send 404
                //we can run the code down here to get the result.
            //if we serve

    });



    //stream: piping - like !pipe! in the cpmmand line. (read about it).
    //so we need to pipe the data and send it in chunks. and pass it a callback.
    //with streams - we always send chunk of the data meanwile the downloading is happening.
    //allow us to recieve chunks of data in a faster way.
    //luckely we got a fs METHOD TO ASSIST WITH THE STREAM
    res.setHeader('contant-type', 'image/jpeg'); //we need to set by the file we are read if an image/text or else.
    const readStream = fs.createReadStream(
        __dirname + '/projects/KittyCarousel/kittiesimg/kit1.jpg'
    );
    readStream.pipe(res);//this will allow to print the file on the website.
    readStream.on('error', err => {//if an error occured and the file is not there.
        console.log(err);
        rese.statusCode = 404;// we can also listen to the error and if it is a missing appendFile
        //we can log a 505 - but we do not have to do so - its with if() and else().
        res.end();
    })
}).listen(8080, () => {console.log('im listening')});
