var dragging = false;

$(".bar").on("mousedown", function(e) {
    e.preventDefault(); //prevents marking elements
    dragging = true;
});

$(".container").on("mousemove", function(e) {
    if (dragging) {
        if (
            $(".container").width() - e.clientX > $(".bar").width() ||
            e.clientX < $(".bar").width()
        ) {
            $(".bar").css({
                left: e.clientX + "px"
            });
            $("#top").css({
                width: e.clientX + "px"
            });
        }
    }
});

$(".container").on("mouseup", function(e) {
    dragging = false;
});
