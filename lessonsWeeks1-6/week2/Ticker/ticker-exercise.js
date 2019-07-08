// Ticker Part 2
// When a users mouses onto a headline, the animation should pause (which will require cancelAnimationFrame) and the headline should turn blue and gain an underline to indicate that it can be clicked. If the user mouses out without clicking, the animation should resume.

var headlines = document.getElementById("headlines");
var links = headlines.getElementsByTagName("A");
var left = headlines.offsetLeft;
var animId;

function tickerToTheLeft() {
  left--;
  if (left <= -links[0].offsetWidth) {
    left += links[0].offsetWidth;
    headlines.appendChild(links[0]);
  }

  headlines.style.left = left + "px";
  animId = requestAnimationFrame(tickerToTheLeft);
}

headlines.addEventListener("mouseenter", function() {
  cancelAnimationFrame(animId);
});

headlines.addEventListener("mouseleave", function() {
  tickerToTheLeft();
});

tickerToTheLeft();
