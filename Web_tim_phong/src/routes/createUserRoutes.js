const express = require("express")
const Router = express.Router()
const createUserController = require("../app/controllers/createUserController")

Router.get("/",createUserController.form)
Router.post("/",createUserController.signup)

module.exports = Router