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

  async getPostByDK(minPrice, maxPrice, minArea, maxArea, quan) {
    try {
        let sql = `
            SELECT * FROM phong
            WHERE status='đã duyệt'
        `;
        const params = [];

        if (quan !== '') {
            sql += ` AND addres LIKE ?`;
            params.push(`%${quan}%`);
        }

        if (minPrice !== 'undefined' && maxPrice !== 'undefined') {
            sql += ` AND price BETWEEN ? AND ?`;
            params.push(minPrice, maxPrice);
        }

        if (minArea !== 'undefined' && maxArea !== 'undefined') {
            sql += ` AND area BETWEEN ? AND ?`;
            params.push(minArea, maxArea);
        }

        const row = await query(sql, params);
        return row;
    } catch (error) {
        console.error("Error in getPostByDK:", error);
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
