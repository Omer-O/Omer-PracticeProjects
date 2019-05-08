const express = require("express");
const app = express();
const twApi = require("./twApi");

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    twApi.getToken(function(err, token) {
        if (err) {
            res.sendStatus(500);
            console.log("RACHEL ERROR!");
        } else {
            console.log("received token: ", token);
            twApi.getTweets(token, function(err, tweets) {
                if (err) {
                    console.log("error: ", err);
                    res.sendStatus(500);
                } else {
                    tweets = filterTweets(tweets);
                    console.log("filtered tweets:", tweets);
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
            console.log("item urls: ", item.entities.urls);
            console.log("item urls length: ", item.entities.urls.length);
            return item.entities.urls && item.entities.urls.length == 1;
        })
        .map(item => {
            console.log("mapping...");
            return {
                text: item.full_text,
                href: item.entities.urls[0].url
            };
        });
    return filteredTweets;
}

//---------------------------------------------------------------

app.listen(8080, () => console.log(`I'm listening.`));
