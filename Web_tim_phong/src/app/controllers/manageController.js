const manageModel = require("../model/manage");

const manageController = {
  xem: async (req, res) => {
    const [data] = await manageModel.xem(req.session.user.username);
    res.render("ownpost", { data, user: req.session.user });
  },

  chitiet: async (req, res) => {
    const id = req.params.id;
    const [data] = await manageModel.chitiet(id);
    res.render("chitiet", {data : data[0]});
  },

  capnhat: async (req, res) => {
    const id = req.params.id;
    const { title, address, description, area, price } = req.body;
    const [result, error] = await manageModel.capnhat({ id, title, address, description, area, price });
    if (error) {
      res.status(500).json({ message: "Cập nhật thất bại", error });
    } else {
      res.status(200).json({ message: "Cập nhật thành công" });
    }
  },

  xoa: async (req, res) => {
    const id = req.params.id;
    const [result, error] = await manageModel.xoa({ id });
    if (error) {
      res.status(500).json({ message: "Xóa thất bại", error });
    } else {
      res.status(200).json({ message: "Xóa thành công" });
    }
  },
};

module.exports = manageController;