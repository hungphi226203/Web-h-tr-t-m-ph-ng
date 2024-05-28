const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.use('/logout', siteController.logout);
router.get('/post/:username/:id/:title', siteController.xem);
router.get('/', siteController.home);

module.exports = router;
