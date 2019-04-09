console.log('hey');

  var centerBox = document.getElementById('box');

document.addEventListener('mousemove', function(c) {
  centerBox.style.backgroundColor = 'green';
  centerBox.style.left = c.pageX -50 + 'px';
  centerBox.style.top = c.pageY -50 + 'px';
});
