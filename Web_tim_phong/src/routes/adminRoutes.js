const express = require("express")
const Router = express.Router()
const adminController = require("../app/controllers/adminController")
const verifyRoles = require("../utils/verify_roles")

Router.get("/",adminController.home)

Router.get("/quan-ly-tai-khoan",verifyRoles.isAdmin,adminController.formtaikhoan)
Router.post("/quan-ly-tai-khoan/change/:username",adminController.changeuser)
Router.delete("/quan-ly-tai-khoan/delete/:username",adminController.deleteuser)

Router.get("/quan-ly-bai-dang",adminController.formbaidang)
Router.post("/quan-ly-bai-dang/change/:id",adminController.changepost)
Router.delete("/quan-ly-bai-dang/delete/:id",adminController.deletepost)

module.exports = Router