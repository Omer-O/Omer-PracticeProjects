// Using jquery, create a modal dialog for your 'Welcome to Berlin and the Future' page. A modal dialog is a popup that users must interact with before they can do anything else. Typically, modals on website involve a box of content sitting on top of a semi-transparent background that fills the browser window.
//
// Your modal should appear 1 second after users arrive at the page. The modal should disappear when the user clicks the X in the upper right corner.
(function() {
  //iife open

  //declairing variables
  var open = $(".popup");
  var close = $(".x");
  var cover = $("#cover");

  open.ready(function() {
    function pop() {
      open.css({
        display: "block"
      });
      cover.addClass("on");
    }
    setTimeout(pop, 1000); //calling the function 1sec after page upload.
  });

  close.on("click", function() {
    open.css({
      display: "none"
    });
  });
})(); //iife close
