(function() {
  //
  var nextUrl;
  var interval;
  if (!nextUrl) {
    $(".more").hide();
  }
  $(".submit-button").on("click", function() {
    var userInput = $("input[name='user-input']").val();
    var dropDown = $("select").val();
    //results search:

    $(".search-result").html("Search resaults" + "''" + userInput + "''");
    $.ajax({
      url: "https://elegant-croissant.glitch.me/spotify",
      data: {
        query: userInput,
        type: dropDown
      },
      success: function(payload) {
        payload = payload.artists || payload.albums;
        nextUrl =
          payload.next &&
          payload.next.replace(
            "https://api.spotify.com/v1/search",
            "https://elegant-croissant.glitch.me/spotify"
          );
        var html = "";
        var img;
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
      }
    });
    checkInfinity();
  });

  $(".more").on("click", function() {
    $.ajax({
      url: nextUrl,
      success: function(payload) {
        payload = payload.artists || payload.albums;
        nextUrl =
          payload.next &&
          payload.next.replace(
            "https://api.spotify.com/v1/search",
            "https://elegant-croissant.glitch.me/spotify"
          );
        var html = "";
        var img;
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
        $("#container").append(html);
      }
    });
    checkInfinity();
  });

  function checkInfinity() {
    var qs = location.search.slice(1);
    qs = qs.split("&");
    var parsedQs = {};
    for (var i = 0; i < qs.length; i++) {
      var item = qs[i].split("=");
      parsedQs[item[0]] = item[1];
    }
    if (parsedQs.scroll && parsedQs.scroll == "infinity") {
      $(".more").hide();
      interval = setInterval(checkScroll, 1000);
    } else {
      return;
    }
  }

  function checkScroll() {
    if (
      $(window).height() + $(document).scrollTop() >=
      $(document).height() - 100
    ) {
      clearInterval(interval);
      $(".more").trigger("click");
      interval;
    }
  }
})();
