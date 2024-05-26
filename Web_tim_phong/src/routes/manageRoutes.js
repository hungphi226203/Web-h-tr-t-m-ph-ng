const express = require("express");
const Router = express.Router();
const manageController = require("../app/controllers/manageController");

Router.get("/", manageController.xem);
Router.get("/manage/:username/:title", manageController.chitiet);
Router.get("/edit/:id", manageController.chitiet);
Router.put("/edit/:id", manageController.capnhat);
Router.delete("/delete/:id", manageController.xoa);

module.exports = Router;
