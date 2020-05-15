const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const { DB_URL } = require('../../../../src/consts');
const Post = require('./post.model');


// img path
var imgPath = '../../../../src/sources/images/IMG-0053.jpg';

// connect to mongo
mongoose.connect('mongodb+srv://dbUser:Mongodb84@cluster0-0hgq3.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true 
});

// // example schema
// var schema = new Schema({
//     img: { data: Buffer, contentType: String }
// });

// // our model
// var A = mongoose.model('A', schema);

mongoose.connection.on('open', function () {
  console.error('mongo is open');

  // empty the collection
  Post.remove(function (err) {
    if (err) throw err;

    console.error('removed old docs');

    // store an img in binary in mongo
    const a = new Post;
    a.title = 'First post'
    a.content = 'This is the first post content'
    a.img.data = fs.readFileSync(imgPath);
    a.img.contentType = 'image/jpg';
    a.save(function (err, a) {
      if (err) throw err;

      console.error('saved img to mongo');

      // start a demo server
      var server = express.createServer();
      server.get('/', function (req, res, next) {
        Post.findById(a, function (err, doc) {
          if (err) return next(err);
          res.contentType(doc.img.contentType);
          res.send(doc.img.data);
        });
      });

      server.on('close', function () {
        console.error('dropping db');
        mongoose.connection.db.dropDatabase(function () {
          console.error('closing db connection');
          mongoose.connection.close();
        });
      });

      server.listen(3333, function (err) {
        var address = server.address();
        console.error('server listening on http://%s:%d', address.address, address.port);
        console.error('press CTRL+C to exit');
      });

      process.on('SIGINT', function () {
        server.close();
      });
    });
  });

});