(function() {
    var circle = document.getElementById("circle");
    // console.log(circle);
    circle.style.background = "orange";
    circle.style.position = "absolute";
    circle.style.left = "50%";
    circle.style.right = "50%";

    var circleTwo = document.querySelector(".box + #circle");

    var boxes = document.getElementsByClassName("box");
    // console.log(boxes[0]);
    boxes[0].style.background = "black";
    boxes[1].style.border = "green 4px solid";
    var divs = document.getElementsByTagName("div");
    // console.log(divs);

    var children = document.querySelectorAll("#container div");
    // console.log(children);

    //creating an element - DOM node
    var myNewDiv = document.createElement("div");
    var text = document.createTextNode("monday");
    myNewDiv.appendChild(text);
    document.body.appendChild(myNewDiv);
})();
