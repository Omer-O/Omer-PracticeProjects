const express = require('express');
const app = express();
const twApi = require('./twApi');

app.use(bodyParser.urlencoded( { extended: false }));
app.use(express.static('./public'));

app.get('/data.json', (req, res) => {//here we need to make our APIS calls to
    // twiter to GET the APIS and we should decide from whos twits to take
    //an actual account
    //we nee to have a get token function and a get twit function.
    //both need to be a synch - we should write them on our module twApi.js
    twApi.getToken(function(err, token) {
        if (err) {
            res.sendStatus(500);
        } else {
            console.log(token);
            twApi.getTweets(token, function(err, tweets) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    console.log(tweets);

                    res.json(tweets)
                }
            });
        }
    })
});

app.listen(8080, () => console.log(`I'm listening.`))
