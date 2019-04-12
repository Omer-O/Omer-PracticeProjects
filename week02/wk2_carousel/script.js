(function() {
    var kitties = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dot");
    // console.log("number of kitties: ", kitties.length);
    var cur = 0;
    var timer;
    var transitioning;

    setTimeout(moveKitties, 3000); //kick off only

    document.addEventListener("transitionend", function fn(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            // console.log("transitionend");
            timer = setTimeout(moveKitties, 2000);
            transitioning = false;
        }
    });
    // -------------- clikable dot ver 1 -----------------
    // for (var i = 0; i < dots.length; i++) {
    //     (function(i) {
    //         dots[i].addEventListener("click", function(e) {
    //             console.log("clicked on dot", i);
    //             // console.log(e.target.id.replace("dot", ""));
    //             // console.log([].slice.call(dots).indexOf(e.target));
    //         });
    //     })(i);
    // }
    // -------------- clikable dot ver 2 -----------------
    //i does not change
    [].slice.call(dots).forEach(function(dot, i) {
        dots[i].addEventListener("click", function(e) {
            console.log(i);
            //if dots correspond to currnet kitty
            if (e.target.classList.contains("on")) {
                return;
            }
            if (transitioning) {
                return;
            }
            // cancel scheduled incoming kitty
            clearTimeout(timer);
            moveKitties(i);
        });
    });
    // -------------- clikable dot ver 3 -----------------
    /* alternative function
    kitties.[cur].addEventListener() -
    e.target.addEventListener("transitionend", function fn(e) {
        e.target.classList.remove("exit");
        e.target.removeEventListener("transitionend", fn);
    });
    */

    function moveKitties(next) {
        transitioning = true;
        dots[cur].classList.remove("on");
        // console.log("the current one is: " + cur);
        kitties[cur].classList.remove("onscreen");
        kitties[cur].classList.add("exit");
        //
        if (next >= 0) {
            cur = next;
        } else cur++;
        if (cur >= kitties.length) {
            cur = 0;
        }

        // console.log("the next one is: " + cur);
        dots[cur].classList.add("on");
        kitties[cur].classList.add("onscreen");
    }
})();
