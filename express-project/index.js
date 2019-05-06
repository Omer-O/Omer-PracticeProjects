const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.urlencoded( { extended: false }));

app.use(function(req, res, next) {
    if(!req.cookies.accepted && req.url != '/cookie') {
        res.cookie('url', req.url);
        res.redirect('/cookie');
    } else {
        next();
    }
})

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
