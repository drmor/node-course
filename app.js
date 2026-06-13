const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

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

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about this blog',
    body: 'more about',
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('6a2d9b3c7c56ccb7e01e560b')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All blogs', blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Blog details' });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create new blog' });
});

//404
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
