const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.use('/logout',siteController.logout)

// router.get('/quan-ly-tin', siteController.quanlypage)

router.use('/xem',siteController.xem)

router.get('/',siteController.home)



module.exports = router