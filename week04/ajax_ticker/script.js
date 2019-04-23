(function() {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("A"); //number of links
    var left = headlines.offsetLeft;
    var animationId;

    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function(data) {
            var resultsHtml = "";
            for (var i = 0; i < data.length; i++) {
                resultsHtml +=
                    "<a href = '" + data[i].href + "'>" + data[i].text + "</a>";
            }
            $("#headlines")
                .html(resultsHtml)
                .show();
            moveHeadlineLines();
        }
    });

    function moveHeadlineLines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(headlines.removeChild(links[0]));
        }
        headlines.style.left = left + "px"; //move headlines to left
        animationId = requestAnimationFrame(moveHeadlineLines);
    }

    headlines.addEventListener("mouseenter", function() {
        cancelAnimationFrame(animationId);
    });

    headlines.addEventListener("mouseleave", function() {
        moveHeadlineLines();
    });
})();
