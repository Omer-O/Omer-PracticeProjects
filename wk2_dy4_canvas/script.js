var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var bodyX = 300;
var bodyY = 200;

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
