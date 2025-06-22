const express = require('express');
const { createPost, getAllPosts, clapPost } = require('../controllers/postController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createPost);
router.get('/', getAllPosts);
router.post('/:id/clap', clapPost);

module.exports = router;
