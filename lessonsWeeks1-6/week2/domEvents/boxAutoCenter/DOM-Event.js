console.log("hey");

/*Exercise 1*/
// Make a page that has on it an element that is 100px by 100px in size, has absolute positioning, and has a solid background color. Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.
var centerBox = document.getElementById("box");

document.addEventListener("mousemove", function(c) {
  centerBox.style.backgroundColor = "green";
  centerBox.style.left = c.pageX - 50 + "px";
  centerBox.style.top = c.pageY - 50 + "px";
});
