const express = require('express')
const router = express.Router()

const siteController = require('/CODE/Nhom27_TTCS/Web-h-tr-t-m-ph-ng/Web_tim_phong/src/app/controllers/SiteController')

router.use('/login',siteController.login)
router.use('/signup',siteController.signup)
router.use('/cho-thue-phong-tro',siteController.cho_thue)
router.use('/tim-nguoi-o-ghep',siteController.tim_nguoi)
router.use('/bang-gia-dich-vu',siteController.bang_gia)
router.use('/quan-ly-tin',siteController.quan_ly)
router.use('/dang-tin',siteController.dang)
router.use('/',siteController.home)

module.exports = router