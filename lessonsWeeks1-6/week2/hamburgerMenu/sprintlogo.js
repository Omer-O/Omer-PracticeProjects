// add to the menu the menu that appears when users click on the hamburger icon on the upper right. After the menu appears, clicks outside of it should make it disappear (clicks on the X in the upper right corner of the menu should also make it disappear).

(function() {
  //iife open

  //declairing variables
  var open = document.getElementById("menubutton");
  var close = document.getElementById("close");
  var side = document.getElementById("menu");
  var cover = document.getElementById("cover");

  open.addEventListener("click", function(e) {
    console.log(e);
    side.classList.add("on");
    cover.classList.add("on");
  });
  close.addEventListener("click", function() {
    side.classList.remove("on");
    cover.classList.remove("on");
  });
  cover.addEventListener("click", function() {
    side.classList.remove("on");
    cover.classList.remove("on");
  });
})(); //iife close
