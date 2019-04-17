$("#button").click(function() {
    var validate = true;
    try {
        // throw "test";
        JSON.parse($("#input").val());
    } catch (error) {
        validate = false;
    }
    if (validate) {
        $("#result")
            .text("JSON is valid")
            .css({
                color: "green"
            });
    } else {
        $("#result")
            .text("JSON is  NOT valid!!!")
            .css({
                color: "red"
            });
    }
});
