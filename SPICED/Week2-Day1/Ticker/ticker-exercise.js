
(function () { //iife 'for a local scope'/

var headlines = document.getElementById('headlines');
var links = headlines.getElementsByTagName('A');
var left = headlines.offsetLeft;

function tickertotheleft() {
    left--;
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(headlines.removeChild(links[0]));
    }
    headlines.style.left = left + "px";
    requestAnimationFrame(tickertotheleft);
}
tickertotheleft();
})();
