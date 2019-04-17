$("#input").on("input", function() {
    localStorage.setItem("temporaryText", $("#input").val());
});
$("#input").val(localStorage.getItem("temporaryText"));
