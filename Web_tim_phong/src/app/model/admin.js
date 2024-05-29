const query = require("../../utils/query");

const adminModel = {
  formtaikhoan: async (username) => {
    try {
      const row = await query("SELECT * FROM `taikhoan` ");
      return row ? [row, null] : [null, "Chưa có bài viết nào"];
    } catch (e) {
      return [null, "Lỗi xảy ra"];
    }
  },

  formbaidang: async (id) => {
    try {
      const row = await query("SELECT * FROM `phong`");
      return row ? [row, null] : [null, "Lỗi"];
    } catch (e) {
      return [null, "Lỗi xảy ra"];
    }
  },

  capnhattaikhoan: async ({ id, title, imageUrl, address, description, area, price }) => {
    try {
      const row = await query(
        "UPDATE phong SET title = ?, imagePath = ?, addres = ?, des = ?, area = ?, price = ? WHERE id = ?",
        [title, imageUrl, address, description, area, price, id]
      );
      return row ? ["Cập nhật thành công", null] : [null, "Cập nhật thất bại"];
    } catch (e) {
      return [null, "Lỗi xảy ra"];
    }
  },

  capnhatbaidang: async ({ id }) => {
    try {
        const row = await query(
          "UPDATE phong SET title = ?, imagePath = ?, addres = ?, des = ?, area = ?, price = ? WHERE id = ?",
          [title, imageUrl, address, description, area, price, id]
        );
        return row ? ["Cập nhật thành công", null] : [null, "Cập nhật thất bại"];
      } catch (e) {
        return [null, "Lỗi xảy ra"];
      }
  },

  deleteuser: async ({ username }) => {
    try {
        const row = await query("DELETE FROM taikhoan WHERE username = ?", [username]);
        row = await query("DELETE FROM phong WHERE username = ?", [username]);
      return row ? ["Xóa thành công", null] : [null, "Xóa thất bại"];
    } catch (e) {
      return [null, "Lỗi xảy ra"];
    }
  },
};

module.exports = adminModel;