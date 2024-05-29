const express = require("express")
const Router = express.Router()
const adminController = require("../app/controllers/adminController")

Router.get("/",adminController.home)

Router.get("/quan-ly-tai-khoan",adminController.formtaikhoan)
Router.post("/quan-ly-tai-khoan",adminController.capnhattaikhoan)

Router.delete("/quan-ly-tai-khoan/delete/:username",adminController.deleteuser)

Router.get("/quan-ly-bai-dang",adminController.formbaidang)
Router.post("/quan-ly-bai-dang",adminController.capnhatbaidang)

module.exports = Router