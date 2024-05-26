const verifyRoles = {
  isAdmin: (req, res, next) => {
    const user = req.session.user;
    if (user) {
      if (user.role !== "admin") return next("Require role Admin");
      return next();
    } else {
      res.redirect("/login");
    }
  },
  isUser: (req, res, next) => {
    const user = req.session.user;
    if (user) {
      next();
    } else {
      res.redirect("/login");
    }
  },
};
module.exports = verifyRoles;
