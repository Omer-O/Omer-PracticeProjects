
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(function(req, res, next) {
    if(!req.cookies.accepted && req.url != '/cookie' ) {
        res.cookie('url', req.url);
        res.redirect('/cookie');
    } else {
        next();
    }
})

app.use(express.static('./public'));
app.use(express.static('./projects'));

app.use(bodyParser.urlencoded( { extended: false }));

//////////////// Davids code //////////////////////////

app.use(express.static('./public'));
app.use(express.static('./projects'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());

app.get('/hello/world', (req, res, next) => {
    console.log(
        req.query
    );
    if (req.query.skip) {
        next();
    } else {
        res.send(`
            <!doctype html>
            <title>Hello!</title>
            <h1>Hello, World!</h1>
        `);
    }
});

app.get('/hello/:name', (req, res) => {
    console.log(
        req.params
    );
    const name = req.params.name;
    res.send(`
        <!doctype html>
        <title>Hello ${name}!</title>
        <h1>Hello, ${name}!!!</h1>
    `);
});

app.get('/hello/world.json', (req, res) => {
    res.json({
        hello: 'world'
    });
});

app.get('/funky', (req, res) => {
    console.log(req.cookies.disco);
    res.sendFile(__dirname + '/funky.html');
});

app.get('/chicken', (req, res) => {
    res.cookie('disco', 'duck');
    res.redirect('/funky');
});

app.post('*', (req, res) => {
    console.log(req.body);
    res.json({
        hello: 'world'
    });
});

app.get('*', (req, res) => {
    res.status(404).send(`
        <!doctype html>
        <title>Not Found!</title>
        <h1>404 NOT FOUND</h1>
    `);
});

app.listen(8080, () => console.log(`I'm listening.`));
