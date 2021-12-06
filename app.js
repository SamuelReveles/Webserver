const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Require hbs y handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//Servir página estática
app.use(express.static('public'));

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Samuel Reveles',
        titulo: 'Curso de node'
    });
});

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Samuel Reveles',
        titulo: 'Curso de node'
    });
});

app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'Samuel Reveles',
        titulo: 'Curso de node'
    });
});

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/old/404.html');
});


app.listen(port, () => {
    console.log('listening on port ' + port);
});