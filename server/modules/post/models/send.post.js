const fs = require('fs');
const mongoose = require('mongoose');
const Post = require('./post.model');


// img path
var imgPath = '../../../../src/sources/images/pojazd';

// connect to mongo
mongoose.connect('mongodb+srv://dbUser:Mongodb84@cluster0-0hgq3.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true 
});

mongoose.connection.on('open', function () {
  console.error('mongo is open');
    // store an img in mongo
    const a = new Post;
    a.title = 'First post'
    a.content = 'This is the first post content'
    a.img.data = fs.readFileSync(`${imgPath}3.jpg`).toString('base64');
    a.img.contentType = 'image/jpg';
    a.save(function (err, a) {
      if (err) throw err;

      console.error('saved img to mongo');
    });
  });