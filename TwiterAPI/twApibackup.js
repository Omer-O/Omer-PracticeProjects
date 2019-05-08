
// first we get the token
// and then we ask again for the twits.

//we want every time to get a new token.

//2 requests each time.

const https = require('https');
const {consumerKey, consumerSecret} = require('./secrets');
const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded( { extended: false }));
// we call a method and pass 2 things. 1 obj and another is a function.
// the fun will recieve a
exports.getToken = function(callback) {
    const encoded =
        Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");

    const req = https.request({
        host: 'api.twitter.com',
        path: '/oauth2/token',
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            authorization: `Basic ${encoded}`
        }
    }, (res) => {
        if (res.statusCode != 200) {
            callback(new Error(res.statusCode));
            console.log(res.statusCode);
        } else {
            let body = '';
            res.on('data', chunk => body += chunk)
            res.on('end', () => {
                try {
                    body = JSON.parse(body);
                    callback(null, body.access_token);
                } catch (err) {
                    callback(err);
                }
            });
        }
    });
    req.on('error', err => {
        console.log(err);
        callback(err);
    })
    req.write('grant_type=client_credentials');
    req.end();
};


exports.getTweets = function(token, callback) {

    const req = https.request({
        host: 'api.twitter.com',
        path: '/1.1/statuses/user_timeline.json?screen_name=theonion&tweet_mode=extended&count=2',
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    }, res => {
        console.log(
            res.statusCode, // will give us 200 for OK if all good.
            res.headers // will give us the actual headers
        );
        if (res.statusCode !== 200) {
            callback(new Error(res.statusCode))
        } else {
            let tweet = '';
            res.on('data', chunk => tweet += chunk); // this will streamthe data.
            res.on('end', () => {
                console.log(tweet);//will give us the data in the command line.
                try {
                    tweet = JSON.parse(tweet);
                    console.log(tweet);
                    callback(null, tweet); //if no error we pass the data(body)
                } catch (err) {
                    callback(err);
                }
            });
        }
        //req.write();//here we will put the body
    });
    req.on('error', err => {
        console.log(err);
        callback(err);
    })
    req.write('grant_type=client_credentials');
    req.end();
};
