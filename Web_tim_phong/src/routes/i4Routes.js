const express = require("express")
const Router = express.Router()
const i4Controller = require("../app/controllers/i4Controller")

Router.get("/",i4Controller.i4)
Router.post("/",i4Controller.capnhat)

module.exports = Router