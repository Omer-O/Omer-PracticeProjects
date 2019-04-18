(function(countries) {
    var resultsContainer = $("#resultsContainer");

    // get the current value of the text field
    $("input").on("input", function() {
        var val = $("input").val();
        var matches = [];
        // loop through the countries and build a list of countries that start with the value
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
                matches.push(countries[i]);
                if (matches.length == 4) {
                    break;
                }
            }
        }
        // if matches array is empty, put the "no results" message into the results element
        if (matches && matches.length) {
            var resultsHtml = "";
            // if matches array is not empty, loop through them, generate html for each
            for (var j = 0; j < matches.length; j++) {
                resultsHtml += '<div class="results">' + matches[j] + "</div>";
            }
        } else {
            resultsHtml = '<div class="results">no results</div>';
        }
        // Update the DOM just once with the full list of result elements
        resultsContainer.html(resultsHtml).show();
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
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Angola",
    "Anguilla",
    "Antigua",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire (Netherlands Antilles)",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Curacao (Netherlands Antilles)",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iraq",
    "Ireland (Republic of)",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kosrae Island",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia (FYROM)",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Ponape",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Rota",
    "Russia",
    "Rwanda",
    "Saba (Netherlands Antilles)",
    "Saipan",
    "Samoa",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St. Barthelemy",
    "St. Croix",
    "St. Eustatius (Netherlands Antilles)",
    "St. John",
    "St. Kitts and Nevis",
    "St. Lucia",
    "St. Maarten (Netherlands Antilles)",
    "St. Thomas",
    "St. Vincent and the Grenadines",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tinian",
    "Togo",
    "Tonga",
    "Tortola",
    "Trinidad and Tobago",
    "Truk",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos",
    "Tuvalu",
    "US Virgin Islands",
    "Uganda",
    "Ukraine",
    "Union Island",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Gorda",
    "Wallis and Futuna",
    "Yap",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]);
