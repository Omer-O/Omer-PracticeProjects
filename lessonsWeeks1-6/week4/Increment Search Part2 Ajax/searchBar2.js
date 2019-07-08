(function() {
  var input = $("input");
  var val = input.val();

  input.on("input", function() {
    clearTimeout(delay);
    var requestAjax = function() {
      $.ajax({
        url: "https://flame-egg.glitch.me/",
        method: "GET",
        data: {
          q: input.val()
        },
        success: function(data) {
          console.log("Data from request", data);
          var val = input.val();
          //infortm 'no result':
          var resultHtml = "";
          if (data.length == 0) {
            resultHtml += '<div class="results">no result</div>';
          }
          //create a new div with the relevant match in the input:
          if (val != "") {
            for (var i = 0; i < data.length; i++) {
              resultHtml += '<div class="results">' + data[i] + "</div>";
            }
          }
          $("#results").html(resultHtml);
          //Event listeners:
          //heighlight the specific line in the menu
          $(".results").on("mouseover", function(evnt) {
            $(".heighlighted").removeClass("heighlighted");
            $(evnt.target).addClass("heighlighted");
          });
          //pick the heighlited line and insert to the input.
          $(".results").on("mousedown", function(evnt) {
            var newString = $(".heighlighted").html();
            input.val(newString);
          });
        }
      });
    };
    var delay = setTimeout(requestAjax, 250);
  });
})();

// input.on("focus", function() {
//   input.trigger("input");
// });

// //Keys navigation in menu
// input.on("keydown", function(e) {
//   if (
//     e.keyCode == 40 &&
//     $(".highlighted")
//       .last()
//       .hasClass("result")
//   ) {
//     hLight($(".heighlighted").next());
//   }
//   if (e.keyCode == 38) {
//     $(".highlighted")
//       .first()
//       .hasClass("result");
//     hLight($(".heighlighted").prev());
//   }
//   if (e.keyCode == 13) {
//     input.val($(".heighlighted").html());
//     $(".results").hide();
//   }
// });
// //function for Keys navigation in menu
// function hLight(h) {
//   $(".heighlighted").removeClass("heighlighted");
//   $(h).addClass("heighlighted");
// }
//
// input.on("blur", function() {
//   $(".results").hide();
// });
