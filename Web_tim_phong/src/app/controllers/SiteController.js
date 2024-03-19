class SiteController {

    home(req,res){
        res.render('home')
    }

    //Dang nhap
    loginpage(req, res) {
        res.render('account/login',{layout:'account'});
        // delete req.session.err;,err: req.session.err
      }

    signuppage(req, res) {
        // connect.query("SELECT * FROM `accounts`",function(err,data){
        //   if(err) res.render('signup',
        //     {layout:'account',err:"Co loi khi ket noi"});
        //   else{
        //     res.render('signup',{layout:'account',accounts:JSON.stringify(data)});
        //     console.log(data);
        //   } 
        // })
        res.render('account/signup',{layout:'account'});
    }
    // login(req, res) {
    //     connect.query("SELECT * FROM `accounts` ",function(err,data){
    //       if(err)  {
    //         res.render('login',
    //         {layout:'account',err:"Co loi khi ket noi"});
    //       }
    //       else {
    //         let isin=false;
    //         for (var i = 0; i < data.length; i++) {
    //           if(req.body.username==data[i].username && req.body.password==data[i].password) isin=true;
    //         }
    //         if(isin==true){
    //           res.render('home');
    //         }else if(isin==false){
    //           res.render('login',
    //         {layout:'account',err:"Sai tai khoan hoac mat khau"});
    //         }
    //       }
    //     })
    //   }
    //   signup(req,res){
    //     connect.execute("INSERT INTO `accounts` VALUE (?,?)",[req.body.username,req.body.password],function(err,data){
    //       if(err) res.render('signup',
    //         {layout:'account',err:"Co loi khi dang ki"});
    //       else{
    //         req.session.err = "Dang ki thanh cong!\nVui long dang nhap";
    //         res.redirect('/account/login');
    //       } 
            
    //     })
    
    //   }
    forget(req,res){
        res.render('account/forget',{layout:'account'})
    }

    
    cho_thue(req,res){
        res.render('cho_thue')
    }

    tim_nguoi(req,res){
        res.render('tim_nguoi')
    }

    bang_gia(req,res){
        res.render('bang_gia')
    }

    quan_ly(req,res){
        res.render('quan_ly')
    }

    dang(req,res){
        res.render('dang')
    }

}

module.exports = new SiteController