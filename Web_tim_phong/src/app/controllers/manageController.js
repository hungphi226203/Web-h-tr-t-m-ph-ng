const manageModel = require("../model/manage");

const manageController = {
  xem: async (req, res) => {
    const [data] = await manageModel.xem(req.session.user);
    res.render("ownpost", { data, user: req.session.user });
  },

  capnhat: async (req, res) => {},

  xoa: async (req, res) => {},
};

module.exports = manageController;
