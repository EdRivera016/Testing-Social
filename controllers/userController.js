const User = require('../models/User');

exports.profile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    res.render('users/profile', { user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Other user controller methods (edit profile, etc.)
