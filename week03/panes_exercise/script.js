var dragging = false;

$(".bar").on("mousedown", function(e) {
    e.preventDefault(); //prevents marking elements
    dragging = true;
});

$(".container").on("mousemove", function(e) {
    if (dragging) {
        $(".bar").css({
            left: e.clientX + "px"
        });
        $("#top").css({
            width: e.clientX + "px"
        });
    }
});

$(".container").on("mouseup", function(e) {
    dragging = false;
});
