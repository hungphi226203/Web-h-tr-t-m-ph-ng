const createUserModel = require("../model/createUser");
const check = require("../../utils/check");

const createUserController = {
  form: async (req, res) => {
    res.render("account/signup", { layout: "account" });
  },

  signup: async (req, res) => {
    const data = req.body;

    if (data.username == "") {
      return res.json({
        err: { mesage: "Không được để trống", type: 1 },
        success: null,
      });
    }
    if (data.password == "") {
      return res.json({
        err: { mesage: "Không được để trống", type: 2 },
        success: null,
      });
    }
    if (data.repassword == "") {
      return res.json({
        err: { mesage: "Không được để trống", type: 3 },
        success: null,
      });
    }
    if (data.password.length < 6) {
      return res.json({
        err: { mesage: "Mật khẩu phải có ít nhất 6 kí tự", type: 2 },
        success: null,
      });
    }
    if (data.password !== data.repassword) {
      return res.json({
        err: { mesage: "Mật khẩu không khớp", type: 3 },
        success: null,
      });
    }
    if (!check.containsOnlyText(data.hovaten)) {
      return res.json({
        err: { mesage: "Họ và tên chỉ được chứa chữ cái", type: 4 },
        success: null,
      });
    }
    if (data.sdt.length > 11 || data.sdt.length < 7) {
      return res.json({
        err: { mesage: "Số điện thoại không hợp lệ", type: 5 },
        success: null,
      });
    }
    if (!check.containsOnlyNumbers(data.sdt)) {
      return res.json({
        err: { mesage: "Số điện thoại chỉ được chứa chữ số", type: 5 },
        success: null,
      });
    }
    if (data.cccd.length !== 12) {
      return res.json({
        err: { mesage: "Căn cước công dân không hợp lệ", type: 6 },
        success: null,
      });
    }
    if (!check.containsOnlyNumbers(data.cccd)) {
      return res.json({
        err: { mesage: "Căn cước công dân chỉ được chứa chữ số", type: 6 },
        success: null,
      });
    }
    if (!check.isValidEmail(data.email)) {
      return res.json({
        err: { mesage: "Email không hợp lệ", type: 7 },
        success: null,
      });
    }

    const [user, err] = await createUserModel.signup({
      username: data.username,
      password: data.password,
      fullname: data.hovaten,
      id_card: data.cccd,
      phone: data.sdt,
      email: data.email,
    });

    if (err) {
      return res.json({ err, success: null });
    }

    return res.json({ err: null, success: true });
  },
};

module.exports = createUserController;
