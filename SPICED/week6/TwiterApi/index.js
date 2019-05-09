const express = require('express');
const app = express();
const twApi = require('./twApi');

app.use(express.static('./public'));

app.get('/data.json', (req, res) => {
        twApi.getToken().then(token => {
        Promise.all([
            twApi.getTweets(token, 'nytimes'),
            twApi.getTweets(token, 'bbcworld'),
            twApi.getTweets(token, 'theonion')
         ]).then(tweets => {
                 let nytimes = tweets[0];
                 let bbcworld = tweets[1];
                 let theonion = tweets[2];
                 let mergeArray = nytimes.concat(bbcworld, theonion);
                 let filterList = filterTweets(mergeArray);
            ////////////// Array.sort //////////////
                 var sorted = filterList.sort(function sortDate(a, b) {
                    return b.date < a.date ?  1 : b.date > a.date ? -1 : 0;
                });
                 res.json(sorted);
         }).catch(err => {
             res.sendStatus(500);
         });
     });
});


//////////////////////// filterTweets function  /////////////////////////////////////////

function filterTweets(newList) {
    //console.log(list);
     const filterList = newList.filter(function(item) {
        return item.entities.urls && item.entities.urls.length == 1;
    }).map (item => {
            return {
                text: item.full_text.split("http", 1),
                href: item.entities.urls[0].url,
                date: item.created_at
            };
        });
        console.log(filterList);
        return filterList;
}

app.listen(8080, () => console.log(`I'm listening.`))
