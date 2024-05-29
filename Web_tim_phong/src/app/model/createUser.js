const query = require("../../utils/query");
const createUserModel = {

  signup: async ({username, password, fullname, id_card, phone, email}) => {
    // return [result success,err]
    try {

      const [usernameRow] = await query(
          "SELECT * FROM `taikhoan` WHERE username = ?",
          [username]
      );

      if (usernameRow) {
          return [null, { mesage: "Tài khoản này đã tồn tại", type: 1 }];
      }

      // Kiểm tra id_card (id_card)
      const [idCardRow] = await query(
          "SELECT * FROM `taikhoan` WHERE id_card = ?",
          [id_card]
      );

      if (idCardRow) {
        return [null, { mesage: "Số căn cước này đã tồn tại", type: 6 }];
      }

      // Kiểm tra phone (phone)
      const [phoneRow] = await query(
          "SELECT * FROM `taikhoan` WHERE phone = ?",
          [phone]
      );

      if (phoneRow) {
        return [null, { mesage: "Số điện thoại này đã tồn tại", type: 5 }];
      }

      // Kiểm tra email
      const [emailRow] = await query(
          "SELECT * FROM `taikhoan` WHERE email = ?",
          [email]
      );

      if (emailRow) {
        return [null, { mesage: "Email này đã tồn tại", type: 7 }];
      }

      await query(
        "INSERT INTO `taikhoan` (username, pass, fullname, id_card, phone, email) VALUES (?, ?, ?, ?, ?, ?)",
       [username, password, fullname, id_card, phone, email]
      );

      return [{ username: username }, null];
    } catch (e) {
      return [null, "Có lỗi khi đăng kí"];
    }
  },
};

module.exports = createUserModel;