(function() {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("A"); //number of links
    var left = headlines.offsetLeft;

    function moveHeadlineLines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(headlines.removeChild(links[0]));
        }
        headlines.style.left = left + "px"; //move headlines to left
        requestAnimationFrame(moveHeadlineLines); //sync with page refresh
    }
    moveHeadlineLines();
})();
