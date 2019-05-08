const express = require("express");
const app = express();
const twApi = require("./twApi");

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    twApi.getToken(function(err, token) {
        if (err) {
            res.sendStatus(500);
        } else {
            console.log("received token: ", token);
            twApi.getTweets(token, function(err, tweets) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    tweets = filterTweets(tweets);
                    res.json(tweets);
                }
            });
        }
    });
});
//---------------------------------------------------------------
function filterTweets(input) {
    const filteredTweets = input
        .filter(item => {
            return item.entities.urls && item.entities.urls.length == 1;
        })
        .map(item => {
            return {
                text: item.full_text,
                href: item.entities.urls[0].url
            };
        });
    return filteredTweets;
}
//---------------------------------------------------------------

app.listen(8080, () => console.log(`I'm listening.`));
