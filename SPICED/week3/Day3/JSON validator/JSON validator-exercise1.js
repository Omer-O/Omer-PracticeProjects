
(function() {
 $('.button').on('click', function () {
     var text = $('#text').val();
     if (typeof text === "object" && text !== null ) {
         return true;
     }
     try {
         JSON.parse(text);
         alert("Valid JSON");
     } catch(error) {
         alert("Not a valid JSON");
     }
});
})();
