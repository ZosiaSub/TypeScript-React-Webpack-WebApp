const { Schema, model }  = require('mongoose');

const postSchema = new Schema({
  title: String,
  content: String,
  img: {
    data: String,
    contentType: String
  }
});

const Post = model('post', postSchema);

module.exports = Post;