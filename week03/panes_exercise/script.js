var dragging = false;
var offset = 0;

$(".bar").on("mousedown", function(e) {
    e.preventDefault(); //prevents marking elements
    dragging = true;
});

$(document).on("mousemove", function(e) {
    if (dragging) {
        if (
            $(".container").width() - e.clientX > $(".bar").width() ||
            e.clientX < $(".bar").width()
        ) {
            $(".bar").css({
                left: e.clientX + offset + "px"
            });
            $("#top").css({
                width: e.clientX + offset + "px"
            });
        }
    }
});

$(".container").on("mouseup", function(e) {
    dragging = false;
});

/*
David's code:


(function() {
    var boxX, boxWidth, offset;
    var slide = $('#slide');
    var box = $('#box');
    var pane1 = $('#pane1');

    slide.on('mousedown', function(e) {
        boxX = box.offset().left;
        boxWidth = box.outerWidth();
        var slideX = slide.position().left;
        var pointerX = e.clientX - boxX;
        offset = pointerX - slideX;
        box.on('mousemove', drag);
        e.preventDefault();
    });

    $(document).on('mouseup', function() {
        box.off('mousemove');
    });

    function drag(e) {
        if (e.clientX > boxX + boxWidth) {
            return;
        }
        if (e.clientX < boxX) {
            return;
        }
        var px = e.clientX - boxX - offset + 'px';
        slide.css({
            left: px
        });
        pane1.css({
            width: px
        });
    }

})();
*/
