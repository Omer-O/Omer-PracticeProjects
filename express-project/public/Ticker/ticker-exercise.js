

var headlines = document.getElementById("headlines");
var links = headlines.getElementsByTagName("A");
var left = headlines.offsetLeft;
var animId;

function tickerToTheLeft() {
    left--;
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(headlines.removeChild(links[0]));
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
