const express = require("express")
const Router = express.Router()
const postController = require("../app/controllers/postController")
const uploadCloud = require("../config/cloudinary");

Router.get("/",postController.form)
Router.post("/",uploadCloud.array('fileupload'),postController.postP)

module.exports = Router