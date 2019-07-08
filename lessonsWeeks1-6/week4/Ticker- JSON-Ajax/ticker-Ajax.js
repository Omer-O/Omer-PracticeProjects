var links;
var left = headlines.offsetLeft;
var animId;

$.ajax({
  url: "./ticker-Ajax.json",
  method: "GET",
  success: function(data) {
    var html = "<div>";

    for (var i = 0; i < data.length; i++) {
      html += "<a href='" + data[i].href + "'>" + data[i].text + "</a>";
    }
    html += "</div>";

    $("#headlines").append(html);
    links = $("a");
    tickerToTheLeft();
  }
});
function tickerToTheLeft() {
  left--;
  if (left <= -links.eq(0).outerWidth()) {
    left += links.eq(0).outerWidth();
    $("#headlines").append(links.eq(0));
    links = $("a");
  }

  $("#headlines").css({
    left: left + "px"
  });
  animId = requestAnimationFrame(tickerToTheLeft);
}
headlines.addEventListener("mouseenter", function() {
  cancelAnimationFrame(animId);
});

headlines.addEventListener("mouseleave", function() {
  tickerToTheLeft();
});
