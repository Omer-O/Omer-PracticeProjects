console.log("hey");

// Exercise:
// Draw a stick figure using a <canvas> element.
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.lineWidth = 5;

//Head:
context.strokeStyle = "black";
context.beginPath();
context.arc(150, 150, 60, 0, Math.PI * 2); //making the head: circle
context.stroke();

//Body
context.strokeStyle = "black";
context.beginPath();
context.moveTo(150, 210);
context.lineTo(150, 450);
context.stroke();

//right heand
context.strokeStyle = "black";
context.beginPath();
context.moveTo(150, 300);
context.lineTo(280, 220);
context.stroke();

//left heand
context.strokeStyle = "black";
context.beginPath();
context.moveTo(150, 300);
context.lineTo(30, 220);
context.stroke();

//right leg
context.strokeStyle = "black";
context.beginPath();
context.moveTo(150, 450);
context.lineTo(30, 550);
context.stroke();

//left leg
context.strokeStyle = "black";
context.beginPath();
context.moveTo(150, 450);
context.lineTo(260, 550);
context.stroke();
