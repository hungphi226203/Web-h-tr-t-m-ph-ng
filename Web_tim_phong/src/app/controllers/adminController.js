const adminModel = require("../model/admin");
const postModel = require("../model/list-post");

const adminController = {

  home:  async (req, res) => {
    const data = await postModel.getPost();
    res.render("home", { layout: "admin", data , user: req.session.user });
  },

  formtaikhoan: async (req, res) => {
    const [data] = await adminModel.formtaikhoan();
    res.render("admin/tai-khoan", { data, layout: "admin", user: req.session.user });
  },

  formbaidang: async (req, res) => {
    const [data] = await adminModel.formbaidang();
    res.render("admin/bai-dang", { data, layout: "admin", user: req.session.user });
  },

  deleteuser: async (req, res) => {
    const username = req.params.username;
    const [result, error] = await adminModel.deleteuser({ username });
    if (error) {
      res.status(500).json({ message: "Xóa thất bại", error });
    } else {
      res.status(200).json({ message: "Xóa thành công" });
    }
  },

  deletepost: async (req, res) => {
    const id = req.params.id;
    const [result, error] = await adminModel.deletepost({ id });
    if (error) {
      res.status(500).json({ message: "Xóa thất bại", error });
    } else {
      res.status(200).json({ message: "Xóa thành công" });
    }
  },

  changeuser: async (req, res) => {
    const username = req.params.username;
    const [result, error] = await adminModel.changeuser({ username });
    if (error) {
      res.status(500).json({ message: "Xóa thất bại", error });
    } else {
      res.status(200).json({ message: "Xóa thành công" });
    }
  },

  changepost: async (req, res) => {
    const id = req.params.id;
    const [result, error] = await adminModel.changepost({ id });
    if (error) {
      res.status(500).json({ message: "Xóa thất bại", error });
    } else {
      res.status(200).json({ message: "Xóa thành công" });
    }
  },
};

module.exports = adminController;