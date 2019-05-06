# Incremental Search - Part 2

Now that we know how to make ajax requests, let's modify our [Incremental Search](https://github.com/spicedacademy/salt/blob/master/wk2_dy3_incremental_search/README.md) to fetch results using ajax.

The url to use is `https://flame-egg.glitch.me/` and it requires a query string parameter named `q`. The value of the `q`parameter should be the value that the user has entered into the text field. For example, if the user types the letter 'a', the url should be `https://flame-egg.glitch.me/?q=a`. You should use the `data` field in the object you pass to `$.ajax` to build the query string.

```
$.ajax({
    url: 'https://flame-egg.glitch.me/',
    data: {
        q: 'a'
    },
    success: function(data) {
        // do something with the data here
    }
});
```

This endpoint uses the exact same list of countries you used in your first version. You can delete that array as well as the code that finds matches in it. Where you used to search for matches you should now make an ajax request. You will have to wait for the response to be received before you can show results. The data passed to your success handler will be an array. For example, if the query string is `q=a`, the data would look like this:

```
[ "Afghanistan", "Albania", "Algeria", "American Samoa" ]
```

An important thing to keep in mind is that you have no guarantee that you will receive responses to requests in the order in which you make the requests. For example, imagine the user types `a` and then `l` and then `b` in quick succession. Now imagine that the first request takes 50 milliseconds while the second request takes 150 milliseconds and the third request takes 50 milliseconds.

```
a -----50ms-----> Afghanistan
                  Albania
                  Algeria
                  American Samoa

     al ---------------150ms---------------> Albania
                                             Algeria

          alb -----50ms-----> Albania
```

Unless you take steps to prevent it, the end result of this will be a text field that says "alb" and a list of results that includes not only Albania but also Algeria.

One way to avoid this situation would be to compare the current value of the text field when your success callback runs to the value you put into the url when you made the request. If the two values do not equal each other, you know the results you have just received are no longer valid and you should not update the page to display them.

### Bonus: Throttling

Something else that can be problematic is the large number of requests this UI can generate. People can type pretty fast so for each user there can be multiple requests per second. This can create too much load for the server to handle.

To mitigate this, you can *throttle* requests. That is, you can limit how many requests a user can make. For example, let's say you wanted to make sure that there is at least a quarter of a second between each request. To do this, you could pass to `setTimeout` a function that makes the request as the first argument and `250` as the second argument. If the user changes the input before the scheduled function runs, you could use `clearTimeout` to cancel it and then set another timer for the new request. This would make the UI less responsive for the user, but it would also eliminate a lot of pointless requests.