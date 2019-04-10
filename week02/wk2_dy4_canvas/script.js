var man = document.getElementById("man");
var context = man.getContext("2d");
var bodyX = 100;
var bodyY = 100;

//initial position of man canvas
var x = 350;
var y = 200;
var step = 10;

man.style.left = x + "px";
man.style.top = y + "px";

context.strokeStyle = "darkblue";
context.arc(bodyX, bodyY - 50, 50, 0, 360);
context.moveTo(bodyX, bodyY);
context.lineTo(bodyX, bodyY + 200);
context.lineTo(bodyX - 100, bodyY + 300);
context.moveTo(bodyX, bodyY + 200);
context.lineTo(bodyX + 100, bodyY + 300);
context.moveTo(bodyX, bodyY + 50);
context.lineTo(bodyX - 100, bodyY);
context.moveTo(bodyX, bodyY + 50);
context.lineTo(bodyX + 100, bodyY);
context.stroke();

document.addEventListener("keydown", function(e) {
    if (e.keyCode === 39) {
        x += step;
    } else if (e.keyCode === 37) {
        x -= step;
    } else if (e.keyCode === 38) {
        y -= step;
    } else if (e.keyCode === 40) {
        y += step;
    }
    man.style.left = x + "px";
    man.style.top = y + "px";
});
