var innerCanvas = document.getElementById("innerCanvasId");
var innerContext = innerCanvas.getContext("2d");

var outerCanvas = document.getElementById("outerCanvasId");
var outerContext = outerCanvas.getContext("2d");

var bodyX = 100;
var bodyY = 100;
innerContext.strokeStyle = "darkblue";
innerContext.arc(bodyX, bodyY - 50, 50, 0, 360);
innerContext.moveTo(bodyX, bodyY);
innerContext.lineTo(bodyX, bodyY + 200);
innerContext.lineTo(bodyX - 100, bodyY + 300);
innerContext.moveTo(bodyX, bodyY + 200);
innerContext.lineTo(bodyX + 100, bodyY + 300);
innerContext.moveTo(bodyX, bodyY + 50);
innerContext.lineTo(bodyX - 100, bodyY);
innerContext.moveTo(bodyX, bodyY + 50);
innerContext.lineTo(bodyX + 100, bodyY);
innerContext.stroke();
// innerContext.clearRect(0, 0, 200, 400);

//initial position of man canvas
var x = 350;
var y = 200;
var step = 10;

outerContext.drawImage(innerCanvas, x, y);

document.addEventListener("keydown", function(e) {
    outerContext.clearRect(0, 0, 900, 900);
    if (e.keyCode === 39) {
        x += step;
    } else if (e.keyCode === 37) {
        x -= step;
    } else if (e.keyCode === 38) {
        y -= step;
    } else if (e.keyCode === 40) {
        y += step;
    }
    outerContext.drawImage(innerCanvas, x, y);
});
