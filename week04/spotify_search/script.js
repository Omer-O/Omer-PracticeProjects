(function() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    // -------------------------------------------------------------------------
    var cardsData = [];
    var nextUrl;
    $(".submit-button").on("click", function() {
        var userInput = $('input[name="user-input"]').val();
        var dropdown = $(".artist-or-album").val();
        $.ajax({
            url: "https://elegant-croissant.glitch.me/spotify",
            data: {
                query: userInput, //query ?webaddress
                type: dropdown
            },
            success: function(payload) {
                payload = payload.artists || payload.albums;
                nextUrl = getNextUrl(payload);
                getResults(payload);
            }
        });
    });

    function getNextUrl(inputPayload) {
        var outputPayload =
            inputPayload.next &&
            inputPayload.next.replace(
                "https://api.spotify.com/v1/search",
                "https://elegant-croissant.glitch.me/spotify"
            );
        if (outputPayload != null) {
            return outputPayload.href;
        }
    }

    function getResults(inputPayload) {
        console.log("payload: ", inputPayload);
        for (var i = 0; i < inputPayload.items.length; i++) {
            $("#results-container").html(
                Handlebars.templates.cards({ results: inputPayload.items })
            );
        }
    }
})();

/*
loop thru items
take urls, images and render
led zepelin artist:
    results for: xxxxxxx - header for results
    - 3 artists, from 3 objects
    each with image - first object, link to url, render, name, external url
    not every band have an image, render an other images, logo of spotify i.e
    first 20 results gives spotify api, button more, an other request to api spotify for next 20 results
    2nd ajax request looks the same, just a new url
    property next: url value for more button
    translate spotift url to davids one

    more button
    alwway on page, show and charIndex
    if (nextUrl) {
    $('more').show()
    $('more').on('click')

!!! separate
dziala tylko na button jesli jest na stronie
    $(document).on('click', '#more',#go function(){
        go click handler, but without data
        add results
        .append -> $("#results")
            .html(resultHtml)
            .show();

        var url, data;
        if (e.target.id == 'more'){
        url = nextUrl;
    } else {
    url = 'https//elegant crosaint
    data = {
        q: input.val(),
        data: data
    }


    if (e.target.id == 'more'){
    $('results').append(html);
}else {
$('#results)'.html(html);
}

or
pass proprty name to use
 $('results') [e.target.id == 'more' ? 'append' : 'html'](html)



            var html getHtml(data)
            function getHtml(){
                var html = '';
                for i - 0; i <items.length; i++){

                }
                return html
            }


            setNextUrl(data.next)
        function  setNextUrl(next){
        nextUrl = next && next.replace(podmiana linku spotify){

    }
    }


    $('body').on('click', 'go', functio(){
    urlTouse = 'https://elegant....?q= + encodeURIComponent(input.val()) + '&type' + select.
}
    $(document).on('click' '#more', function(e){
    ajax
    url: urlTouse
})

})
PART 2
    location.search.indexOf('scroll'=infinte');
    > -1
    var qs= location.search.slice(1);
    qs = qs.split('&');
    var parsedQs = {};
    for (var i= 0; i <qs.length; i++){
        var item = qs[i].split('=');
        parsedQs[item[0]] = item[0];



    checkForScroll(){
    var hasReachedBottom;
    if (hasReachedBottom){
    //get more - stop checking
}else
    setTimePut(checkScroll, 500);
}

height of the window
height of the page
scrollbar
$(window).height()
$(document).height();
$(docuiment).scrollTop();

when reach the bottom:
if  scrollTop + window height  >= document - 50 -< buffer (close to)


}

*/
