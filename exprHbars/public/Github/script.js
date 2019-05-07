
(function() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
      'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
      Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    /////////////////////////////////////////////////////////////////////////////////////

    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();
    var autorize = 'Basic ' + btoa(username + ":" + password);
    var rootUrl = 'https://api.github.com';


$('.submit-button').on('click', function() {
    var userToSearch = $('input[name="user-to-search"]').val();
    var endPoint = '/users/'+ userToSearch + '/repos';

    $.ajax({
        url: rootUrl + endPoint,
        headers:{
            Authorization: autorize
        },
        success: function(data) {
            $(".container").html(Handlebars.templates.cards({ data }));
            console.log(data);
        }
      })
   });


   $(document).on('click', '.card', function(e) {
       console.log('hry');

       var reposEndPoint = '/repos/' + e.currentTarget.id + '/commits';
       $.ajax({
           url: rootUrl + reposEndPoint,
           headers:{
               Authorization: autorize
           },
           success: function(dataCommits) {
                $(".commits").html(Handlebars.templates.commits({ dataCommits }));
           }
         })
      });

})();
