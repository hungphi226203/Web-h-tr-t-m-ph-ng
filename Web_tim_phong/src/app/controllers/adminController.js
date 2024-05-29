const adminModel = require("../model/admin");
const postModel = require("../model/list-post");

const adminController = {

  home:  async (req, res) => {
    const data = await postModel.getPost();
    res.render("home", { layout: "admin", data , user: req.session.user });
  },

  formtaikhoan: async (req, res) => {
    const [data] = await adminModel.formtaikhoan();
    console.log(data)
    res.render("admin/tai-khoan", { data, layout: "admin" });
  },

  formbaidang: async (req, res) => {
    const [data] = await adminModel.formbaidang();
    res.render("admin/bai-dang", { data, layout: "admin" });
  },

  capnhattaikhoan: async (req, res) => {
    const id = req.params.id;
    try {
      const [data] = await adminModel.chitiet(id);
      res.render("chitiet", { data: data[0], user: req.session.user });
    } catch (error) {
      res.status(500).send("Lỗi server");
    }
  },

  capnhatbaidang: async (req, res) => {
    const imageUrl = req.files.map(file => file.path).join(',');
    const id = req.params.id;
    const { title, address, description, area, price } = req.body;
    const [result, error] = await adminModel.capnhat({ id, title, imageUrl, address, description, area, price });
    if (error) {
      res.status(500).json({ message: "Cập nhật thất bại", error });
    } else {
      res.status(200).json({ message: "Cập nhật thành công" });
    }
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
};

module.exports = adminController;