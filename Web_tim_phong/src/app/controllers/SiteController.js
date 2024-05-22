const postModel = require("../model/list-post");
class SiteController {
  async home(req, res) {
    const data = await postModel.getPost();
    res.render("home", {
      data,
      user: req.session.user,
      sodu: req.session.sodu,
    });
  }

  // signuppage(req, res) {
  //   connect.query("SELECT * FROM `taikhoan`", function (err, data) {
  //       if (err){
  //           console.log(err);
  //           res.render("account/signup", {
  //               layout: "account",
  //               err: "Có lỗi khi kết nối",
  //           });
  //       } else {
  //           res.render("account/signup", {
  //               layout: "account",
  //               accounts: data
  //           });
  //       }
  //   });
  // }

  // signup(req, res) {
  //   connect.query(
  //       "INSERT INTO `taikhoan` (user, pass, fullname, id_card, phone, email) VALUES (?, ?, ?, ?, ?, ?)",
  //       [req.body.username, req.body.password, req.body.hovaten, req.body.cccd, req.body.sdt, req.body.email],
  //       function (err, data) {
  //           if (err) {
  //               res.render("account/signup", {
  //                   layout: "account",
  //                   err: "Có lỗi khi đăng kí",
  //               });
  //           } else {
  //               req.session.err = "Đăng kí thành công!\nVui lòng đăng nhập";
  //               return res.redirect("/login");
  //           }
  //       }
  //   );
  // }

  logout(req, res) {
    req.session.user = null;
    req.session.save(function (err) {
      if (err) next(err);

      req.session.regenerate(function (err) {
        if (err) next(err);
        res.redirect("/");
      });
    });
  }

  xem(req, res) {
    res.render("xem");
  }
}

module.exports = new SiteController();
