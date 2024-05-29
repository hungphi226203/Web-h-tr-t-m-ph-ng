const query = require("../../utils/query");

const i4Model = {
  i4: async ({ username }) => {
    try {
      const res = await query("SELECT * FROM `taikhoan` WHERE `username` = ?", [username]);
      return res;
    } catch (error) {
      console.error("Error executing query:", error);
      throw error;
    }
  },

  capnhat: async (username, fullname, id_card, phone, email) => {
    try {
      const row = await query(
        "UPDATE TAIKHOAN SET fullname = ?, id_card = ?, phone = ?, email = ? WHERE username = ?",
        [fullname, id_card, phone, email, username]
      );
      return row ? ["Cập nhật thành công", null] : [null, "Cập nhật thất bại"];
    } catch (e) {
      return [null, "Lỗi xảy ra"];
    }
  },

  doipass: async (username,oldpass,newpass) => {
    try {
      const [cpass] = await query(
        "SELECT PASS FROM taikhoan WHERE username = ?",
        [username]
      )

      const currentPass = cpass[0].pass;

      if ( oldpass !== currentPass ){
        return [null, "Không khớp"];
      }
      const row = await query(
        "UPDATE TAIKHOAN SET pass = ? WHERE username = ?",
        [newpass, username]
      );
      return row ? ["Cập nhật thành công", null] : [null, "Cập nhật thất bại"];
    } catch (e) {
      return [null, "Lỗi xảy ra"];
    }
  } 

};

module.exports = i4Model;
