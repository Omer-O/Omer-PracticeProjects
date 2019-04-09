
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

var big = document.getElementById('bigger');
big.addEventListener("click", function() {
      big.style.background = aColor();
});

var small = document.getElementById('smaller');
small.addEventListener("click", function(s) {
      s.stopPropagation();
      small.style.background = aColor();
});
