
console.log('hey');

(function(){

var kitties = document.getElementsByClassName('kitty');
var dots = document.getElementsByClassName('dot');
var carousel = 0;
var time;
var transitioning;

setTimeout(moveKitties, 2000);

document.addEventListener('transitionend', function(e) {
    if (e.target.classList.contains('exit')) {
        e.target.classList.remove('exit');
        time = setTimeout(moveKitties, 2000);
        transitioning = false;
    }
});

for (var i = 0; i < dots.length; i++) {
    (function(i) {
        dots[i].addEventListener('click', function(e){
          if( carousel === i ) {
            return;
          }
          if (transitioning) {
            return;
          }
          clearTimeout(time);
          moveKitties(i);
        });
    })(i);
}


function moveKitties(next) {
  transitioning = true;

  dots[carousel].classList.remove('on');
  kitties[carousel].classList.remove('onscreen');
  kitties[carousel].classList.add('exit');

  setTimeout(moveKitties, 2000);

  if (typeof next >= 0) {
      carousel = next;
  } else {
    carousel++;
    if (carousel >= kitties.length) {
        carousel = 0;
    }
  }
  dots[carousel].classList.add('on');
  kitties[carousel].classList.add('onscreen');
  }
})();
// I submit the exercise although, until now, I couldnt figure out
//why the carousel goes off synch. will try to get assist tomorrow in the morning
//from a class mate.
