const query = require("../../utils/query");
const createUserModel = {

  signup: async ({ username, password }) => {
    // return [result success,err]
    try {
      if (username == "" || password == "")
        return [null, "Không được bỏ trống"];

      const [row] = await query(
        "SELECT * FROM `taikhoan` WHERE username = ?",
        [username]
      );

      if (row) {
        // không khớp
        return [null, "Tài khoản đã tồn tài"];
      }

      await query(
        "INSERT INTO `taikhoan` (username, pass, fullname, id_card, phone, email) VALUES (?, ?, ?, ?, ?, ?)",
       [req.body.username, req.body.password, req.body.hovaten, req.body.cccd, req.body.sdt, req.body.email]
      );

      return [{ username: row.username }, null];
    } catch (e) {
      return [null, "Có lỗi khi đăng kí"];
    }
  },
};

module.exports = createUserModel;