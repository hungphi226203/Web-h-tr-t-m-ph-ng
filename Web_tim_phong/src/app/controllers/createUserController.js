const createUserModel = require("../model/createUser");

const createUserController = {
  form: async (req, res) => {
    res.render("account/signup", { layout: "account" });
  },

  signup: async (req, res) => {
    console.log(req);
    res.json({ err: { mesage: "chưa nhập mật khẩu", type: 1 }, success: null });

    //   const [user, err] = await createUserModel.signup(req.body);

    //   if (err) {
    //     return res.render("account/login", {
    //       layout: "account",
    //       err,
    //     });
    //   }
    //   // user {username}

    //   req.session.regenerate(function (err) {
    //     if (err) {
    //       return res.render("account/signup", {
    //         layout: "account",
    //         err: "Lỗi server",
    //       });
    //     }
    //     req.session.user = user;
    //     req.session.save(function (err) {
    //       if (err) return next(err);
    //       res.redirect("/");
    //     });
    //   });
  },
};

module.exports = createUserController;
