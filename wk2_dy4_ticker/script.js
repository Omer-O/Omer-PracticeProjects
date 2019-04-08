(function() {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("A"); //number of links
    var left = headlines.offsetLeft;

    console.log("Number of links: ", links);
    console.log("First link: ", links[0]);
    console.log("Lenght of 1st link: ", links[0].text.lenght);
    console.log("offsetWidth: ", links[0].offsetWidth);
    function moveHeadlineLines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            console.log("First link gone!");
            left += links[0].offsetWidth;
            var removed = headlines.removeChild(links[0]);
            headlines.appendChild(removed);
        }
        //move headlines to left
        headlines.style.left = left + "px";
        // }
        requestAnimationFrame(moveHeadlineLines); //sync with page refresh
    }
    moveHeadlineLines();
})();
