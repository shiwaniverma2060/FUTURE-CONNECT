const express = require('express');
const { updateProfile, getProfile } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.put('/profile', auth, updateProfile);
router.get('/profile', auth, getProfile);

module.exports = router;
