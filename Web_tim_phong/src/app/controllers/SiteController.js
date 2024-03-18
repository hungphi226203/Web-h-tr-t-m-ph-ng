class SiteController {

    home(req,res){
        res.render('home')
    }

    login(req,res){
        res.render('login')
    }

    signup(req,res){
        res.render('signup')
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