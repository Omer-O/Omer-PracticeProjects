const express = require("express");
const app = express();
const twApi = require("./twApi");

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    twApi.token().then(token => {
        // console.log("checking if the fn is a promise:", tweets());
        Promise.all([
            twApi.tweets(token, "nytimes"),
            twApi.tweets(token, "bbcworld"),
            twApi.tweets(token, "theonion")
        ])
            .then(tweets => {
                // console.log(tweets);
                let nytimes = tweets[0];
                let bbcworld = tweets[1];
                let theonion = tweets[2];
                let margedArrTweets = nytimes.concat(theonion, bbcworld);
                // filterTweets
                res.json(filterTweets(margedArrTweets));
            })
            .catch(err => {
                res.sendStatus(500);
            });
    });
});

//---------------------------------------------------------------
function filterTweets(input) {
    const filteredTweets = input
        .filter(item => {
            return item.entities.urls && item.entities.urls.length == 1;
        })
        .map(item => {
            // --- removing links ----
            let text = item.full_text;
            if (item.entities.media) {
                for (var i = 0; i < item.entities.media.length; i++) {
                    text = text.split(item.entities.media[i].url).join("");
                }
            }
            text = text.split(item.entities.urls[0].url).join("");
            // ----------------------
            return {
                text: text.trim(),
                href: item.entities.urls[0].url
            };
        });
    return filteredTweets;
}
//---------------------------------------------------------------

app.listen(8080, () => console.log(`I'm listening.`));
