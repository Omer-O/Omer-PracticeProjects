console.log('hi');
(function() {
    $('.bar').on('mousedown', function() {
        $('.container').on('mousemove', function(evnt) {
            if(evnt.pageX > 590) {//I cannot fix the left side from reaching the edge of the picture.
                return;
            }
            $('.bar').css({
                left: evnt.pageX + 5 + 'px'
            });
            $('.top').css({
                width: evnt.pageX + 5 + 'px'
            });
        });
    });
}());
