(function() {
    var left = $("#headlines").offset().left;
    var animationId;

    function moveHeadlineLines() {
        left--;
        if (
            left <=
            -$("a")
                .eq(0)
                .outerWidth()
        ) {
            left += $("a")
                .eq(0)
                .outerWidth();
            $("#headlines").append($("a").eq(0));
        }

        $("#headlines").css({
            left: left + "px"
        });
        animationId = requestAnimationFrame(moveHeadlineLines); //sync with page refresh
    }

    $("#headlines").on("mouseenter", function() {
        cancelAnimationFrame(animationId);
    });

    $("#headlines").on("mouseleave", function() {
        moveHeadlineLines();
    });

    moveHeadlineLines();
})();
