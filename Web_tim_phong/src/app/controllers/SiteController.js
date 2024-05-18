const connect = require("../../config/db/db.js");
class SiteController {
  home(req, res) {
    res.render("home", { user: req.session.user, sodu: req.session.sodu });
  }

  //Dang nhap
  loginpage(req, res) {
    res.render("account/login", { layout: "account", err: req.session.err });
    delete req.session.err;
  }

  signuppage(req, res) {
    connect.query("SELECT * FROM `taikhoan`", function (err, data) {
      if (err) {
        console.log(err);
        res.render("account/signup", {
          layout: "account",
          err: "Có lỗi khi kết nối",
        });
      } else {
        if (data.length === 0) {
          res.render("account/signup", {
              layout: "account",
              accounts: [],
              noaccounts: true, 
          });
      } else {
          res.render("account/signup", {
              layout: "account",
              accounts: data,
          });
      }
      }
    });
  }

  login(req, res) {
    connect.query("SELECT * FROM `taikhoan` ", function (err, data) {
      if (err) {
        res.render("account/login", {
          layout: "account",
          err: "Có lỗi khi kết nối",
        });
      } else {
        let check = false;
        let per='user';
        for (var i = 0; i < data.length; i++) {
          if (
            req.body.username == data[i].username &&
            req.body.password == data[i].pass
          ) {
            check = true;
            req.session.user = req.body.username;
            req.session.sodu = data[i].acc_balance;
            per=data[i].role
            
            break;
          }
        }
        if (check) {
          if(per=='admin'){
            res.redirect("/admin/tai-khoan")
            delete req.session.sodu;
          }
          else res.redirect("/");
        } else {
          res.render("account/login", {
            layout: "account",
            err: "Sai tài khoản hoặc mật khẩu",
          });
        }
      }
    });
  }

  signup(req, res) {
    connect.query(
      "INSERT INTO `taikhoan` (username, pass, fullname, id_card, phone, email) VALUES (?, ?, ?, ?, ?, ?)",
      [
        req.body.username,
        req.body.password,
        req.body.hovaten,
        req.body.cccd,
        req.body.sdt,
        req.body.email,
      ],
      function (err, data) {
        if (err) {
          res.render("account/signup", {
            layout: "account",
            err: "Có lỗi khi đăng kí",
          });
        } else {
          req.session.err = "Đăng kí thành công!\nVui lòng đăng nhập";
          return res.redirect("/login");
        }
      }
    );
  }
  logout(req, res) {
    console.log(req.session.err);
    delete req.session.user;
    delete req.session.sodu;
    res.redirect("/");
  }

  xem(req, res) {
    res.render("xem", { layout: "main" });
  }

  cho_thue(req, res) {
    res.render("cho_thue");
  }

  tim_nguoi(req, res) {
    res.render("tim_nguoi");
  }

  bang_gia(req, res) {
    res.render("bang_gia");
  }

  quan_ly(req, res) {
    res.render("quan_ly");
  }

  dang(req, res) {
    res.render("dang_tin",{layout: "main", user: req.session.user, sodu: req.session.sodu });
  }
}

module.exports = new SiteController();
