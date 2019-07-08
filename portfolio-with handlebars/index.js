const express = require('express');
const hb = require('express-handlebars');

const fs = require('fs');
const projectList = fs.readdirSync('./public');

const app = express();

app.engine('handlebars', hb());
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home', {
        layout: 'main',
        siteName: 'best',
        projects: projectList
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'main',
        projects: projectList
    });
});

app.get('/public/', (req, res) => {
    res.render('nav', {
        layout: 'main',
        imgName: req.params.name,
        projects: projectList
    });
});

app.get('/:name/description', (req, res) => {
   const path = require(`./public/${req.params.name}/description.json`);
   console.log(path.name);
   res.render('projects', {
       layout: 'main',
       projectName: req.params.name,
       projects: projectList,
       script: path
    });
});

app.listen(8080, () =>{console.log('Im listening')});
