const authModel = require("../model/auth");

const authController = {
  login: (req, res) => {
    if (!req.session?.user?.username) {
      // kiểm tra có đăng nhập hay chưa
      res.render("account/login", { layout: "account", err: req.session.err });
    } else {
      //nếu rồi thì chuyển hướng
      res.redirect("/");
    }
  },
  
  checkLogin: async (req, res) => {
    const [user, err] = await authModel.checkLogin(req.body);

    if (err) {
      return res.render("account/login", {
        layout: "account",
        err,
      });
    }
    
    // user {username, role, sodu}
    req.session.regenerate(function (err) {
      if (err) {
        return res.render("account/login", {
          layout: "account",
          err: "Lỗi sever",
        });
      }
      req.session.user = user;
      req.session.save(function (err) {
        if (err) return next(err);
        res.redirect("/");
      });
    });
  },
};

module.exports = authController;
