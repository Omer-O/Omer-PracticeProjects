const express = require("express");
const app = express();
const twApi = require("./twApi");
app.use(express.static("./public"));

twApi.getToken(function(err, token) {
    console.log("error", err);
    console.log("token", token);
});

// app.get("/data.json", (req, res) => {
//     //api call for twetts
//     // create module and call it here
//     twApi.getToken(function(err, token) => {
//         if (err){
//             res.sendStatus(500);
//         } else {
//             twApi.getTweets(token, function(err, tweets){
//                 if (err){
//                     res.sendStatus(500);
//                 } else {
//                     //rw tweet processing here or pass to function
//                     res.json(tweets);
//                 }
//             });
//         }
//     })
// });
app.listen(8080, () => console.log("server is running"));
