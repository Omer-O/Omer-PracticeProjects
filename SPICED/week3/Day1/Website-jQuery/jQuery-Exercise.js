
(function() { //iife open

//declairing variables
    var open = $(".popup");
    var close = $(".x");
    var cover = $("#cover");


  open.ready(function() {
    function pop() {
      open.css({
        display: 'block',
      });
      cover.addClass('on');
    }
      setTimeout(pop, 1000); //calling the function 1sec after page upload.
    });

    close.on("click", function() {
    open.css({
        display: 'none'
    });
  });
}()); //iife close
