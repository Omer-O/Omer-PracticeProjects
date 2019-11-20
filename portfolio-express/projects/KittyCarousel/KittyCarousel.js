/*k[cur].classList.remove('kittyonscreen');
k[cur].classList.add('exit'); k[1].classList.add('onscreen');
//add onscreenclass to the next one
  seTimeout(moveKitties, 2000);
      console.log('The current one is' + cur);*/
console.log('hey');

(function(){

var kitties = document.getElementsByClassName('kitty');
var carousel = 0;


setTimeout(moveKitties, 2000);
document.addEventListener('transitionend', function (e) {
    if (e.target.classList.contains('exit')) {//.contains tell to check what is inside the class list.
        e.target.classList.remove('exit');
      }
  });

function moveKitties() {
  kitties[carousel].classList.remove('onscreen');
  kitties[carousel].classList.add('exit');

  setTimeout(moveKitties, 2000);

  carousel++;
  if (carousel >= kitties.length) {
      carousel = 0;
  }
  kitties[carousel].classList.add('onscreen');
  }
  console.log('and' + carousel);
})();
