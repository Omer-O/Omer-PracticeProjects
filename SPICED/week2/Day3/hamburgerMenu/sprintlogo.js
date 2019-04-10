
(function () { //iife open

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
}()); //iife close
