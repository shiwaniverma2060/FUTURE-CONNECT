const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { content, imageUrl } = req.body;
    const post = await Post.create({ userId: req.user.uid, content, imageUrl });
    res.json(post);
  } catch {
    res.status(500).json({ error: "Could not create post" });
  }
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

exports.clapPost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndUpdate(id, { $inc: { claps: 1 } });
  res.json({ message: "Clapped!" });
};
