const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

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
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes

app.use(blogRoutes);

//404
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
