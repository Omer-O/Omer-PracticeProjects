console.log("hi");
// Lots of UIs also feature resizable panes in which the content reflows as the pane it is in grows or shrinks. Let's attempt the first variety, the one with images that do not resize. You can use any two images you want.
//
// You'll want to detect mousedown events on the bar that sits on top of the images. After a mousedown (but before a mouseup), the bar should follow the mouse pointer on the x axis but never move out of the area defined by the left edge and right edge of the images. As the bar moves, the visible portions of the images should change correspondingly.
(function() {
  $(".bar").on("mousedown", function() {
    $(".container").on("mousemove", function(evnt) {
      if (evnt.pageX > 590) {
        //I cannot fix the left side from reaching the edge of the picture.
        return;
      }
      $(".bar").css({
        left: evnt.pageX + 5 + "px"
      });
      $(".top").css({
        width: evnt.pageX + 5 + "px"
      });
    });
  });
})();
