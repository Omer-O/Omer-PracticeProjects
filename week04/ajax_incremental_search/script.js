(function() {
    var resultsContainer = $("#resultsContainer");

    $("input").on("input", function() {
        var val = $("input").val();
        $.ajax({
            url: "https://flame-egg.glitch.me/",
            method: "GET",
            data: { q: val },
            success: function(data) {
                if (val != $("input").val()) {
                    return;
                }
                var resultsHtml = "";
                if (data && data.length) {
                    for (var j = 0; j < data.length; j++) {
                        resultsHtml +=
                            '<div class="results">' + data[j] + "</div>";
                    }
                } else if (!val) {
                    resultsContainer.html(resultsHtml).hide();
                } else {
                    resultsHtml = '<div class="results">no results</div>';
                }
                resultsContainer.html(resultsHtml).show();
            }
        });
    });
    // mouseover/mouseenter (individual result)
    resultsContainer.on("mouseover", ".results", function(e) {
        // remove the highlight class from the result that has it if there is one
        // add the highlight class to the event target
        $(".highlight").removeClass("highlight");
        $(e.target).addClass("highlight");
    });

    // resultsContainer.on("mouseleave", function(e) {
    //     resultsContainer.removeClass("highlight");
    //     resultsContainer.html("").hide();
    // });

    // mousedown (individual result)
    resultsContainer.on("mousedown", function(e) {
        $("input").val($(e.target).html());
        resultsContainer.html("").hide();
    });

    $("input").on("keydown", function(e) {
        var resultsList = $(".results");
        var isHighligted = resultsContainer.find(".highlight").length;
        var highlightPosition;
        //if the down arrow is pressed
        if (e.keyCode == 40) {
            // if no result element has the highlight class, add the highlight class to the first result
            if (!isHighligted) {
                if (resultsList.length > 0) {
                    resultsList.eq(0).addClass("highlight");
                }
                // if a result other than the last one has the highlight class,
                // remove the highlight class from the result that has it and add it to the next one
            } else if (isHighligted) {
                highlightPosition = $(".results.highlight").index();
                if (highlightPosition < resultsList.length - 1) {
                    resultsList.eq(highlightPosition + 1).addClass("highlight");
                    resultsList.eq(highlightPosition).removeClass("highlight");
                    // if the last result element has the highlight class, do nothing
                } else {
                    //console.log("last element, do nothing");
                }
            }
            // if the up arrow is pressed
        } else if (e.keyCode == 38) {
            highlightPosition = $(".results.highlight").index();
            // if no result element has the highlight class, add the highlight class to the last result
            if (!isHighligted) {
                if (resultsList.length > 0) {
                    resultsList
                        .eq(resultsList.length - 1)
                        .addClass("highlight");
                }
                // if a result other than the first one has the highlight class,
                // remove the highlight class from the result that has it and add it to the previous one
            } else if (isHighligted) {
                if (highlightPosition != 0) {
                    resultsList.eq(highlightPosition - 1).addClass("highlight");
                    resultsList.eq(highlightPosition).removeClass("highlight");
                }
            }
            // if the return key is pressed
        } else if (e.keyCode == 13) {
            // take the text contained by the element with the highlight class and
            // set it as the value of the text field
            $("input").val($(".results.highlight").html());
            // empty and/or hide the results
            resultsContainer.html("").hide();
        }
    });
})();
