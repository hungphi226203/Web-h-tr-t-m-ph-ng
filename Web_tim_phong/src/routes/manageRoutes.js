const express = require("express");
const Router = express.Router();
const manageController = require("../app/controllers/manageController");
const uploadCloud = require("../config/cloudinary");

Router.get("/", manageController.xem);
Router.get("/manage/:username/:id/:title", manageController.chitiet);
Router.get("/edit/:id", manageController.formcapnhat);
Router.put("/edit/:id",uploadCloud.array('fileupload'), manageController.capnhat);
Router.delete("/delete/:id", manageController.xoa);

module.exports = Router;
