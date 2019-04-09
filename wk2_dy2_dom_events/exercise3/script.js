/*
Make a page that has on it an element that is 100px by 100px in size and has a solid black border.
When the user mouses down on this box, its background should change to a randomly selected color.
When the user mouses up on it, its background should change to another randomly selected color.
*/
var element = document.getElementById("element");

element.addEventListener("mousedown", function() {
    element.style.backgroundColor = randomColor();
});

element.addEventListener("mouseup", function() {
    element.style.backgroundColor = randomColor();
});

function randomColor() {
    function randomValue() {
        return Math.floor(Math.random() * 256);
    }
    var rgb = [randomValue(), randomValue(), randomValue()];
    return "rgb(" + rgb.join() + ")";
}
