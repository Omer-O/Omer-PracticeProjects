(function() {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("A"); //number of links
    var left = headlines.offsetLeft;
    var animationId;

    function moveHeadlineLines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(headlines.removeChild(links[0]));
        }
        headlines.style.left = left + "px"; //move headlines to left
        animationId = requestAnimationFrame(moveHeadlineLines); //sync with page refresh
        // console.log(animationId);
    }

    headlines.addEventListener("mouseenter", function() {
        cancelAnimationFrame(animationId);

        // console.log(animationId);
    });

    headlines.addEventListener("mouseleave", function() {
        moveHeadlineLines();
    });

    moveHeadlineLines();
})();
