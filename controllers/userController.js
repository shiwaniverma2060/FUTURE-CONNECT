const User = require('../models/User');

exports.updateProfile = async (req, res) => {
  try {
    const { name, bio, avatar } = req.body;
    const uid = req.user.uid;

    const user = await User.findOneAndUpdate(
      { uid },
      { name, bio, avatar },
      { upsert: true, new: true }
    );

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Profile update failed" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.user.uid });
    res.json(user);
  } catch {
    res.status(404).json({ error: "User not found" });
  }
};
