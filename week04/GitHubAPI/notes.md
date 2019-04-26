1. render avatar_url and full_name on screen using Handlebars 


2. when a repo is clicked, make second ajax request to get the list of commits on the repo.
- this second ajax request will look very similar to the first one except the endpoint will be different. 


3. render list of commits using Handlebars. 
- you can either (1) create a new template for commits, or (2) use the template you created for repos. 
- warning: when you get the list of commits from Github you might get more than 10. We only want to render the 10 most recent commits. You will have to handle this. 