console.log("check");

var button = document.getElementById("btn");

button.addEventListener("click", function() {
    console.log("clicked");
    document.querySelector("body").style.backgroundColor = "lightgrey";
});

document.addEventListener("keydown", function(evt) {
    console.log("keydown");
    console.log(evt);
    if (evt.keyCode == 78) {
        console.log("n was pressed");
        document.querySelector("body").style.backgroundColor = "pink";
    }
});

document.addEventListener("click", function(cl) {
    console.log(cl);
});
