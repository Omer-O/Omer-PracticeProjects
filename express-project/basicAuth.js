
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const basicAuth = require('basic-auth');

app.use(cookieParser());
app.use(bodyParser.urlencoded( { extended: false }));

app.use(function(req, res, next) {
    if(!req.cookies.accepted && req.url != '/cookie') {
        res.cookie('url', req.url);
        res.redirect('/cookie');
    } else {
        next();
    }
});

var auth = function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != 'discoduck' || creds.pass != 'opensesame') {
        res.setHeader('WWW-Authenticate', 'Basic realm="Enter your credentials to see this stuff."');// this value
        res.sendStatus(401);
    } else {
        next();
    }
};
app.use('/spotify', auth); // this will protect the folder of kittycarousel.

app.get('/cookie', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/cookie', (req, res) => {
console.log(req.body.acceptCookie);
    if (req.body.acceptCookie == "on") {
        res.cookie('accepted', 'yes');
        res.redirect(req.cookies.url);
    } else {
        next();
    }
})
app.use(express.static('./public'));
app.listen(8080, () => console.log(`I'm listening.`));
