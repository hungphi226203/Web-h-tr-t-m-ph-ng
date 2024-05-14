const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

// router.get('/login',siteController.loginpage)
// router.get('/signup',siteController.signuppage)
// router.post('/login',siteController.login)
// router.post('/signup',siteController.signup)


router.get('/bang-gia-dich-vu',siteController.bang_gia)
router.use('/quan-ly-tin',siteController.quan_ly)
router.post('/dang-tin',siteController.dang_tin)
router.get('/dang-tin',siteController.dang_tin_get)
router.get('/',siteController.home)



module.exports = router