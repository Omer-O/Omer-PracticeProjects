const express = require('express');
const app = express();
const twApi = require('./twApi');

app.use(express.static('./public'));

app.get('./data.json', (req, res) => {
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
                    tweets = tweets.filter(function (tweet) {
                        return tweet.entities.urls && tweet.entities.urls.length == 1;
                    }).map (item => {
                            return {
                                text: item.full_text.split(" http", 1),
                                href: item.entities.urls[0].url
                            }
                        }
                    )
                    res.json(tweets)
                }
            });
        }
    })
});


app.listen(8080, () => console.log(`I'm listening.`))
