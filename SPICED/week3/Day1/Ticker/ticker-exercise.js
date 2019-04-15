

(function() {
//Declarations:
  var links = $('a');
  var animId;
  var left = $('.headlines').offset().left;
  var headlines = $('.headlines');

  function tickerToTheLeft() {
      left--;
      if (left <= -links.eq(0).outerWidth()) {
          left += links.eq(0).outerWidth();
          headlines.append(headlines.eq(0));
          console.log(links.eq(0));
      }
  headlines.css({
      left: left +'px'
  });
  animId = requestAnimationFrame(tickerToTheLeft);
  }

  links.on("mouseenter", function() {
      cancelAnimationFrame(animId);
  });

  links.on("mouseleave", function() {
      tickerToTheLeft();
  });
  tickerToTheLeft();
}());
