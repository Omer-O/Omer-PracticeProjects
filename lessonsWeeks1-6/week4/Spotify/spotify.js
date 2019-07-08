// console.log("hey", $);
//without the "more" button
(function() {
  var nextUrl;
  $(".submit-button").on("click", function() {
    var userInput = $("input[name='user-input']").val();
    var dropDown = $("select").val();

    $.ajax({
      url: "https://elegant-croissant.glitch.me/spotify",
      data: {
        query: userInput,
        type: dropDown
      },
      success: giveMore
    });
  });

  var giveMore = function spotifyResaults(payload) {
    payload = payload.artists || payload.albums;
    nextUrl =
      payload.next &&
      payload.next.replace(
        "https://api.spotify.com/v1/search",
        "https://elegant-croissant.glitch.me/spotify"
      );
    var html = "";
    var img;
    // $(".image").remove();
    // $(".artistsName").remove();

    for (var i = 0; i < payload.items.length; i++) {
      try {
        img = payload.items[i].images[0].url;
      } catch (e) {
        img = "./noimage.png";
      } finally {
        html +=
          '<div class="results">' +
          '<div class="image"><a href="' +
          payload.items[i].external_urls.spotify +
          '">' +
          '<img src="' +
          img +
          '"></a></div>' +
          '<div class="artistsName">' +
          payload.items[i].name +
          "</div></div>";
      }
    }
    $("#container").html(html);
  };

  // $(".artistsName").on("click", function() {
  //   $.get(nextUrl, giveMore);
  // });
})();
