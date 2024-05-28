const query = require('../../utils/query');

const getPostModel = {
  async getPost() {
    try {
      const res = await query("SELECT * FROM phong WHERE status='đã duyệt'");
      return res;
    } catch (e) {
      console.error(e);
      return [];
    }
  },

  async getPostById(id) {
    try {
      const row = await query(
        `SELECT p.*, t.fullname, t.email, t.phone 
         FROM phong p 
         JOIN taikhoan t ON p.username = t.username 
         WHERE p.id = ?`, 
        [id]
      );
      return row ? [row, null] : [null, "Lỗi"];
    } catch (e) {
      console.error(e);
      return [null, "Lỗi xảy ra"];
    }
  }
};

module.exports = getPostModel;
