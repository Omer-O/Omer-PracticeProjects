const https = require("https");
const { consumerKey, consumerSecret } = require("./twetter_credentials");

exports.getToken = function(callback) {
    const encoded = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
        "base64"
    );
    const req = https.request(
        {
            host: "api.twetter.com",
            path: "/oath2/token",
            method: "POST",
            headers: {
                "content-type": "application....",
                authorization: `Basic ${encoded}`
            }
        },
        res => {
            if (res.statusCode != 200) {
                callback(new Error(res.statusCode));
            } else {
                let body = "";
                res.on("data", (chunk = data += chunk));
                res.on("end", () => {
                    console.log(body);
                    try {
                        body = JSON.parse(body);
                    } catch (err) {
                        callback(err);
                    }
                });
            }
        }
    );
    req.write("grant_type=client_credentials");
    req.end(); // send the request out
};

// exports.getMadonna = function(callback) {
//     const req = https.request(
//         {
//             host: "elegant-croissant.glich.me",
//             path: "/spotify?q=madonna&type=artist&limit=1",
//             method: "GET",
//             port: 443,
//             headers: {
//                 "x-funky-chicken": "cuteness!!!"
//             }
//         },
//         res => {
//             //response object
//             if (res.statusCode != 200) {
//                 callback(new Error(res.statusCode));
//             }
//             if (res.statusCode == 200) {
//                 let body = "";
//                 res.on("data", chunk => (body += chunk));
//                 res.on("end", () => {
//                     try {
//                         body = JSON.parse(body);
//                         console.log(body.artists.items[0]);
//                         callback(null, body);
//                     } catch (e) {
//                         console.log(e);
//                         callback(e);
//                     }
//                 });
//             }
//         } // end of res
//     ); //end of const req https
//     req.on("error", err => {
//         console.log(err);
//         callback(err);
//     }); // end of req.on error
//     req.end(); // send the request out
// }; // end of callback fn

// tweets = tweets.filter(
//     item => {
//         // true keep it, false throw away, chcek for one link
//
//     }
// ).map(
//     item => {
//         return{
//             text: item.full_text,
//             href: item.enitities.url[0].url
// }})
