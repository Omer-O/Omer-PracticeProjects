
//Exercise #1

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
