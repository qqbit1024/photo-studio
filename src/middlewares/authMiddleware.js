const { Customer } = require('../db/models');

const authorizate = async (req, res, next) => {
  if (req.session.user) {
    res.locals.user = req.session.user;
  } else {
    const currentUser = await Customer.create();
    req.session.user = {
      ...currentUser,
      id: currentUser.id,
    };
    res.locals.user = req.session.user;
  }
  next();
};

module.exports = {
  authorizate,
};
