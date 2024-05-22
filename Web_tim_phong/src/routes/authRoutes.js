const express = require("express")
const Router = express.Router()
const authController = require("../app/controllers/authController")

Router.get("/",authController.login)
Router.post("/",authController.checkLogin)

module.exports = Router