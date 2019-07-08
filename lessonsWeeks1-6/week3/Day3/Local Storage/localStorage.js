(function() {
    $('.button').on("click", function() {
        var text = $('#text').val();
        try {
            localStorage.setItem("nmae", text);
        } catch (e) {
            alert(e);
        }
    });
}());
