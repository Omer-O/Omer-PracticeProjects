{
    host: 'api.twitter.com',
    path: '/1.1/status/user_timeline.json?screen_name=theonion&tweet_mode=extended',
    headers: {
        authorization: `Bearer ${token}`
    }
}

//once we get the tweets we need to loop through them and we need to take
//what we need from them.
//we want to filter the tweets we need only tweets with 1 URL.

{
    full_text: '' //this is the actual tweet
    entities:
}

// after we get the tweets:
tweets = tweets.filter(
    // here we want to give a condition so if we got 1 URL we keep
    // if not we continue to map.
).map(
    item => {
        return { //here with the map, we can replace
            text: item.full_text,
            href: item.entities.urls[0].url
        }
    }
)
