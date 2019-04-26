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
        console.log("url: ", rootUrl + endpoint);
        $.ajax({
            url: rootUrl + endpoint,
            headers: {
                Authorization: "Basic " + btoa(username + ":" + password)
            },
            success: function(payload) {
                console.log("success payload: ", payload);
                getResults(payload);
                //avatar_url
                //full_name
                // 10 most (cut down if more) of commits when click, second ajax request with diffrenet endpoint
            }
        });
    });
    function getResults(inputPayload) {
        console.log(inputPayload);
        $("#results-container").html(
            Handlebars.templates.cards({ results: inputPayload })
        );
    }
})();
