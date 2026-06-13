const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//connect to modgoDB
const dbURI =
  'mongodb+srv://ne_uchi:Green123@cluster0.znlaz0w.mongodb.net/note-tuts?appName=cluster0';
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
// register view engine

app.set('view engine', 'ejs');

// middleware & static files
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const blogs = [
    { title: 'first', snippet: 'Some text for first' },
    { title: 'second', snippet: 'Some text for second' },
    { title: 'third', snippet: 'Some text for third' },
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create new blog' });
});

//404
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
