const express = require("express");
const Router = express.Router();
const manageController = require("../app/controllers/manageController");

Router.get("/", manageController.xem);
Router.get("/edit", manageController.capnhat);
Router.get("/delete", manageController.xoa);

module.exports = Router;
