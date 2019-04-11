(function() {
    var kitties = document.getElementsByClassName("kitty");
    // console.log("number of kitties: ", kitties.length);
    var cur = 0;
    setTimeout(moveKitties, 5000); //kick off only

    document.addEventListener("transitionend", function fn(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            // console.log("transitionend");
            setTimeout(moveKitties, 2000);
        }
    });

    /* alternative function
    kitties.[cur].addEventListener() -
    e.target.addEventListener("transitionend", function fn(e) {
        e.target.classList.remove("exit");
        e.target.removeEventListener("transitionend", fn);
    });
    */

    function moveKitties() {
        // console.log("the current one is: " + cur);
        kitties[cur].classList.remove("onscreen");
        kitties[cur].classList.add("exit");
        cur++;
        if (cur >= kitties.length) {
            cur = 0;
        }
        // console.log("the next one is: " + cur);
        kitties[cur].classList.add("onscreen");
    }
})();
