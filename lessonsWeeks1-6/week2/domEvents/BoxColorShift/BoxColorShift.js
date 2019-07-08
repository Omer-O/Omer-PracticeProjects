/*Exersice 4 */
// Make a page that has on it an element that is 200px by 200px in size and has a solid background color. Nest within that element another element that is 50px by 50px in size and has a different solid background color. When the user clicks on the outer element its background color should change to a randomly selected color. However, if the user clicks on the inner element, the inner element's background color should change to a randomly selected background color but the outer element's background color should not change at all.
function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function aColor() {
  var r = getRandomNumber(256);
  var g = getRandomNumber(256);
  var b = getRandomNumber(256);
  var aColor = "rgb(" + r + "," + g + "," + b + ")";
  return aColor;
}

var big = document.getElementById("bigger");
big.addEventListener("click", function() {
  big.style.background = aColor();
});

var small = document.getElementById("smaller");
small.addEventListener("click", function(s) {
  s.stopPropagation();
  small.style.background = aColor();
});
