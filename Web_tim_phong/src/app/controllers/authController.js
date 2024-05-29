const authModel = require("../model/auth");

const authController = {
  login: (req, res) => {
    if (!req.session?.user?.username) {
      res.render("account/login", { layout: "account", err: req.session.err });
    } else {
      res.redirect("/");
    }
  },
  
  checkLogin: async (req, res, next) => {
    try {
      const [user, err] = await authModel.checkLogin(req.body);

      if (err) {
        return res.render("account/login", {
          layout: "account",
          err,
        });
      }

      // User object contains {username, role, sodu}
      req.session.regenerate(async function (err) {
        if (err) {
          return res.render("account/login", {
            layout: "account",
            err: "Lỗi server",
          });
        }

        req.session.user = user;
        req.session.save(async function (err) {
          if (err) return next(err);
          
          if (user.role == 'admin') {
            return res.redirect("/admin");
          } else {
            res.redirect("/");
          }
        });
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;
