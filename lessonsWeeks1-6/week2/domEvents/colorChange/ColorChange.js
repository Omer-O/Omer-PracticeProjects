//console.log('hey');

/*Exersice 3 */
// Make a page that has on it an element that is 100px by 100px in size and has a solid black border. When the user mouses down on this box, its background should change to a randomly selected color. When the user mouses up on it, its background should change to another randomly selected color.
var box = document.getElementById("container");

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

document.addEventListener("mousedown", function() {
  var r = getRandomNumber();
  var g = getRandomNumber();
  var b = getRandomNumber();
  var aColor = "rgb(" + r + "," + g + "," + b + ")";
  box.style.backgroundColor = aColor;
});

document.addEventListener("mouseup", function() {
  var r = getRandomNumber();
  var g = getRandomNumber();
  var b = getRandomNumber();
  var aColor = "rgb(" + r + "," + g + "," + b + ")";
  box.style.backgroundColor = aColor;
});
