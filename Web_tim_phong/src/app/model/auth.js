const query = require("../../utils/query");
const authModel = {
  checkLogin: async ({ username, password }) => {
    // return [result success,err]
    try {
      if (username == "" || password == "")
        return [null, "Không được bỏ trống"];
      const [row] = await query(
        "SELECT * FROM `taikhoan` WHERE username = ? and pass = ?",
        [username, password]
      );

      if (row) {
        return [{ username: row.username, role: row.role}, null];
      } else {
        return [null, "Không đúng tài khoản, mật khẩu"];
      }
      
    } catch (e) {
      return [null, "Lỗi xảy ra"];
    }
  },
};

module.exports = authModel;
