const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/AdminController.js')

router.use('/tai-khoan/quyen/:id',adminController.quyen)
router.use('/tai-khoan/xoa/:id',adminController.xoa)
router.use('/tai-khoan/timkiem',adminController.timkiem)
router.use('/tai-khoan',adminController.index)
router.use('/bai-dang/trangthai/:id',adminController.trangthai)
router.use('/bai-dang/xoa/:id',adminController.xoabd)
router.use('/bai-dang',adminController.dangtin)



module.exports = router