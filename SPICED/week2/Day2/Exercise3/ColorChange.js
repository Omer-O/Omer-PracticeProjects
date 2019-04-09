//console.log('hey');

/*Exersice 3 */

var box = document.getElementById('container');

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

document.addEventListener('mousedown', function() {
  var r = getRandomNumber();
  var g = getRandomNumber();
  var b = getRandomNumber();
  var aColor = "rgb(" + r + "," + g + "," + b + ")";
      box.style.backgroundColor = aColor;

});

document.addEventListener('mouseup', function() {
  var r = getRandomNumber();
  var g = getRandomNumber();
  var b = getRandomNumber();
  var aColor = "rgb(" + r + "," + g + "," + b + ")";
      box.style.backgroundColor = aColor;
});
