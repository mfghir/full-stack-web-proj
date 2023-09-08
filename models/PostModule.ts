import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  title: String,
  content: String,
  published: {
    type: Boolean,
    default: false,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
