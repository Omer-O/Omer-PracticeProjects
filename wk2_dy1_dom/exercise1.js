/*
1)
The function should find all the elements in the document that match the selector
and change their style so that the text they contain is italic, underlined, and bold.
*/
(function() {
    function matchSelector(selector) {
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.fontStyle = "italic ";
            elements[i].style.fontWeight = "bold";
            elements[i].style.textDecoration = "underline";
        }
    }
    matchSelector("div");
})();
