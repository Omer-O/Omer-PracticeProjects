const express = require("express");
const app = express();
const twApi = require("./twApi");
const util = require("util");

const getToken = util.promisify(twApi.getToken);
const getTweets = util.promisify(twApi.getTweets);

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    getToken().then(token => {
        // console.log("checking if the fn is a promise:", tweets());
        Promise.all([
            getTweets(token, "nytimes"),
            getTweets(token, "bbcworld"),
            getTweets(token, "theonion")
        ])
            .then(tweets => {
                // console.log(tweets);
                let nytimes = tweets[0];
                let bbcworld = tweets[1];
                let theonion = tweets[2];
                let margedTweets = nytimes.concat(theonion, bbcworld);
                let filteredTweets = filterTweets(margedTweets);
                let sortedTweets = sortTweets(filteredTweets);
                res.json(sortedTweets);
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
                href: item.entities.urls[0].url,
                date: item.created_at
            };
        });
    return filteredTweets;
}

function sortTweets(tweets) {
    return tweets.sort(function compare(a, b) {
        var dateA = new Date(a.date).getTime();
        var dateB = new Date(b.date).getTime();
        // console.log("date diff: ", dateA - dateB);
        return dateA - dateB;
    });
}
//---------------------------------------------------------------

app.listen(8080, () => console.log(`I'm listening.`));
