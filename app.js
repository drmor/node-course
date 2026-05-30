const express = require('express');
const app = express();

// register view engine

app.set('view engine', 'ejs');

//listen for requests

app.listen(3000);

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
