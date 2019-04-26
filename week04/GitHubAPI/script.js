(function() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    //-----------------------------------------------------------

    $(".submit-button").on("click", function() {
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();
        var userToSearch = $('input[name="user-to-search"]').val();

        var rootUrl = "https://api.github.com";
        var endpoint = "/users/" + userToSearch + "/repos";
        $.ajax({
            url: rootUrl + endpoint,
            headers: {
                Authorization: "Basic " + btoa(username + ":" + password)
            },
            success: function(payload) {
                getResults(payload);
                // 10 most (cut down if more) of commits when click, second ajax request with diffrenet endpoint
            }
        });
    });

    $(".card").on("click", function(e) {
        console.log("clicked on card", e);
    });

    function getResults(inputPayload) {
        $("#results-container").html(
            Handlebars.templates.cards({ results: inputPayload })
        );
    }
})();
