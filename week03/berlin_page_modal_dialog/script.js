/*
Using jquery, create a modal dialog for your 'Welcome to Berlin and the Future' page.
A modal dialog is a popup that users must interact with before they can do anything else.
Typically, modals on website involve a box of content sitting on top of a semi-transparent background that fills the browser window.
*/

(function() {
    var box = document.getElementById("box");

    setTimeout(function() {
        $("#modal_container").addClass("on");
        $("#overlay").addClass("on");
    }, 1000);

    $("#modal_close").on("click", function() {
        $("#modal_container").removeClass("on");
        $("#overlay").removeClass("on");
    });
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
