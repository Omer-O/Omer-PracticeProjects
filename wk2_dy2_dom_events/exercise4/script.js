/*
Make a page that has on it an element that is 200px by 200px in size and has a solid background color.
Nest within that element another element that is 50px by 50px in size and has a different solid background color.
When the user clicks on the outer element its background color should change to a randomly selected color. However,
if the user clicks on the inner element, the inner element's background color should change
to a randomly selected background color but the outer element's background color should not change at all.
*/
var outBox = document.getElementById("outBox");
var inBox = document.getElementById("inBox");

outBox.addEventListener("click", function() {
    outBox.style.backgroundColor = randomColor();
});

inBox.addEventListener("click", function(e) {
    e.stopPropagation();
    inBox.style.backgroundColor = randomColor();
});

function randomColor() {
    function randomValue() {
        return Math.floor(Math.random() * 256);
    }
    var rgb = [randomValue(), randomValue(), randomValue()];
    return "rgb(" + rgb.join() + ")";
}
