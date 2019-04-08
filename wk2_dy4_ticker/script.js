(function() {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("A"); //number of links
    var left = headlines.offsetLeft;

    function moveHeadlineLines() {
        console.log(left--);
        headlines.style.left = left + "px";
        // }
        requestAnimationFrame(moveHeadlineLines); //sync with page refresh
    }

    moveHeadlineLines();
})();
