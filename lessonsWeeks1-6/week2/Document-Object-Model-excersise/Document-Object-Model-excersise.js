
//Exercise #1
// Write a function that expects a string representing a selector to be passed as a parameter. The function should find all the elements in the document that match the selector and change their style so that the text they contain is italic, underlined, and bold.
function fn(s) {
    var newElement = document.querySelectorAll(s);
    for (var i = 0; i < newElement.length; i++) {}
        newElement[i].style.fontStyle = 'italic';
        newElement[i].style.textDecoration = 'underline';
        newElement[i].style.textWeight = 'bold';
    }
}

fn('div');

//Exercise #2
// Write a function that expects a string representing a class name to be passed as a parameter. The function should return an array containing all the elements in the document that have the class that was passed in.
function fn(c) {
    var arr = document.getElementsByClassName(c);
    var allarr = [];
    for (var i = 0; i < arr.length; i++) {
         allarr += arr[i];
    }
    return  allarr;
}
fn('slctr');


//Exercise #3
// Write a function that inserts an element into the body of the currently loaded page. That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.
function addEl() {
    var newDiv = document.createElement("h3");
    var newtext = document.createTextNode("AWESOME");
    newDiv.appendChild(newtext);
    document.body.appendChild(newDiv);
    newDiv.style.position = "fixed";
    newDiv.style.zIndex = "2147483647";
    newDiv.style.left = "20px";
    newDiv.style.top = "100px";
    newDiv.style.fontSize = "200px";
};

addEl();
