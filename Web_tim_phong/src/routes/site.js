const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController.js')


router.get('/login',siteController.loginpage)
router.get('/signup',siteController.signuppage)
router.post('/login',siteController.login)
router.post('/signup',siteController.signup)
router.use('/logout',siteController.logout)
router.use('/quan-ly-tin',siteController.quan_ly)
router.use('/dang-tin',siteController.dang)
router.use('/xem',siteController.xem)

router.use('/',siteController.home)

module.exports = router