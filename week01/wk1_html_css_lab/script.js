(function() {
    var box = document.getElementById("box");

    var menu = document.getElementById("menu");
    menu.addEventListener("click", function(e) {
        e.stopPropagation();
        console.log("cliked on hamburger");
        box.classList.remove("off");
        box.classList.add("on");
        overlay.classList.add("on");
    });

    var overlay = document.getElementById("overlay");
    overlay.addEventListener("click", function() {
        console.log("cliked on overlay");
        box.classList.remove("on");
        box.classList.add("off");
        overlay.classList.remove("on");
    });

    var close = document.getElementById("x");
    close.addEventListener("click", function() {
        console.log("cliked on X");
        box.classList.remove("on");
        box.classList.add("off");
        overlay.classList.remove("on");
    });
})();
