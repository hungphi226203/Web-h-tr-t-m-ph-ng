const connect = require("../../config/db/db.js");

class AdminController{
    index(req,res){
        connect.query("SELECT * FROM `taikhoan`", function (err, data) {
            if (err) {
              console.log(err);
              
            } else {
              res.render("admin/tai-khoan", {
                layout: "admin",
                accounts: data,
                user:req.session.user
              });
            }
          });
    }
    quyen(req, res){ 
      let user = req.params.id;
      let per = user.slice(-2);
      user = user.slice(0, -2);
      if(per=="ad"){
        per="user";
      }else per="admin"
      connect.query("UPDATE `taikhoan` SET `role` = ? WHERE `username` = ?", [per, user], function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('Database error');
        } else {
          res.redirect("/admin/tai-khoan");
        }
        });
      }
      
    xoa(req, res){
      const user = req.params.id;
      connect.query("DELETE FROM `taikhoan` WHERE `username` = ?", [user], function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('Database error');
        } else {
          res.redirect("/admin/tai-khoan");
        }
        });
    }
    timkiem(req, res){
      const user=req.query.user;
      connect.query("SELECT * FROM `taikhoan` where username LIKE (?)",[`%${user}%`], function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(user)
          res.render("admin/tai-khoan", {
            layout: "admin",
            accounts: data,
            user:req.session.user
          });
        }
      });
    }
    dangtin(req, res){
      connect.query("SELECT * FROM `phong`", function (err, data) {
        if (err) {
          console.log(err);
          
        } else {
          res.render("admin/bai-dang", {
            layout: "admin",
            baidang: data,
            user:req.session.user
          });
        }
      });
    }
    trangthai(req, res){
      console.log(req.session.user)
      let id = req.params.id;
      let tt = id.slice(-4);
      id = id.slice(0, -4);
      if(tt=="dang"){
        tt="đã duyệt";
      }else tt="đang xử lý"
      connect.query("UPDATE `phong` SET `status` = ? WHERE `id` = ?", [tt, id], function (err) {
        if (err) {
          console.log(err);
          res.status(500).send('Database error');
        } else {
          res.redirect("/admin/bai-dang");
        }
        });
      }
    xoabd(req, res ){
      // const id = req.params.id;
      // connect.query("DELETE FROM `phong` WHERE `id` = ?", [id], function (err, data) {
      //   if (err) {
      //     console.log(err);
      //     res.status(500).send('Database error');
      //   } else {
      //     res.redirect("/admin/bai-dang");
      //   }
      //   });
    }
}

module.exports =new AdminController();