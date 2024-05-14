const postModel = require("../model/list-post")
const dangtin = require("../model/dangtin")
class SiteController {

    async home(req,res){
        const data = await postModel.getPost()
        res.render('home',{data})
    }

    //Dang nhap
    loginpage(req, res){
        res.render('account/login',{layout:'account'});
        // delete req.session.err;,err: req.session.err
    }

    signuppage(req, res){
        connect.query("SELECT * FROM `accounts`",function(err,data){
          if(err) res.render('signup',
            {layout:'account',err:"Co loi khi ket noi"});
          else{
            res.render('signup',{layout:'account',accounts:JSON.stringify(data)});
            console.log(data);
          } 
        })
        res.render('account/signup',{layout:'account'});
    }
    login(req, res) {
        connect.query("SELECT * FROM `accounts` ",function(err,data){
          if(err)  {
            res.render('login',
            {layout:'account',err:"Co loi khi ket noi"});
          }
          else {
            let isin=false;
            for (var i = 0; i < data.length; i++) {
              if(req.body.username==data[i].username && req.body.password==data[i].password) isin=true;
            }
            if(isin==true){
              res.render('home');
            }else if(isin==false){
              res.render('login',
            {layout:'account',err:"Sai tai khoan hoac mat khau"});
            }
          }
        })
      }
      signup(req,res){
        connect.execute("INSERT INTO `accounts` VALUE (?,?)",[req.body.username,req.body.password],function(err,data){
          if(err) res.render('signup',
            {layout:'account',err:"Co loi khi dang ki"});
          else{
            req.session.err = "Dang ki thanh cong!\nVui long dang nhap";
            res.redirect('/account/login');
          } 
            
        })
    
      }
    
    forget(req,res){
        res.render('account/forget',{layout:'account'})
    }

    bang_gia(req,res){
        res.render('bang_gia')
    }

    quan_ly(req,res){
        res.render('quan_ly')
    }

    dang_tin_get(req,res){
        res.render('dang_tin')
    }
    dang_tin(req,res){
        let {addres,description,area,price} = req.body
        dangtin.post(addres,description,area,price)
        res.render('home')
    }
}

module.exports = new SiteController