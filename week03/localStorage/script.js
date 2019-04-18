try {
    $("#input").val(localStorage.getItem("temporaryText"));
} catch (error) {
    console.log(error);
}

$("#input").on("input", function() {
    try {
        localStorage.setItem("temporaryText", $("#input").val());
    } catch (error) {
        console.log(error);
    }
});
