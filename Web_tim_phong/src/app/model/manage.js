const query = require("../../utils/query");

const manageModel = {
  xem: async ({ username }) => {
    // return [result success,err]
    try {
      const row = await query(
        "SELECT * FROM `phong` WHERE username = ?",
        [username]
      );

      if (row) {
        return [row, null];
      } else {
        return [null, "Chưa có bài viết nào"];
      }
      
    } catch (e) {
      return [null, "Lỗi xảy ra"];
    }
  },

  capnhat: async ({username,imagePath,title,address,description,area,price,id}) => {
    // return [result success,err]
    try {

      const [row] = await query(
        "UPDATE phong SET username = ?, imagePath = ?, title = ?, address = ?, des = ?, area = ?, price = ? WHERE id = ?",
        [username, imagePath, title, address, description, area, price, id]
      );

    if (row) {
      return ["Gửi thành công chờ duyệt", null];
    } else {
      return [null, "Không hợp lệ"];
    }
    
  } catch (e) {
    return [null, "Lỗi xảy ra"];
  }
  },

  xoa: async ({id}) => {
    // return [result success,err]
    try {

      const [row] = await query(
        "DELETE FROM phong WHERE id = ?",
        [id]
      );

      if (row) {
        return [null, "Xóa thất bại"];
      } else {
        return [null, "Xóa thành công"];
      }
      
    } catch (e) {
      return [null, "Lỗi xảy ra"];
    }
  },
};

module.exports = manageModel;
