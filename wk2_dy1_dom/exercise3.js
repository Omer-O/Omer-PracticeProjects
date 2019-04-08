/*
3)
Write a function that inserts an element into the body of the currently loaded page.
That element should have fixed position, z-index of 2147483647,
left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.
*/
(function() {
    var myNewDiv = document.createElement("p");
    var awsomeText = document.createTextNode("AWESOME");
    myNewDiv.appendChild(awsomeText);
    document.body.appendChild(myNewDiv);
    myNewDiv.style.fontSize = "200px";
    myNewDiv.style.position = "fixed";
    myNewDiv.style.left = "20px";
    myNewDiv.style.top = "100px";
    myNewDiv.style.zIndex = "2147483647";
})();
