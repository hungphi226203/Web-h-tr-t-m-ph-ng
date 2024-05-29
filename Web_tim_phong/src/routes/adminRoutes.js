const express = require("express")
const Router = express.Router()
const adminController = require("../app/controllers/adminController")

Router.get("/",adminController.home)

Router.get("/quan-ly-tai-khoan",adminController.formtaikhoan)
Router.delete("/quan-ly-tai-khoan/delete/:username",adminController.deleteuser)
Router.post("/quan-ly-tai-khoan/change/:username",adminController.changeuser)

Router.get("/quan-ly-bai-dang",adminController.formbaidang)
Router.delete("/quan-ly-bai-dang/delete/:id",adminController.deletepost)
Router.post("/quan-ly-bai-dang/change/:id",adminController.changepost)

module.exports = Router