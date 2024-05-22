const query = require("../../utils/query");
const postModel = {
  postP: async (username,imagePath,title,address,description,area,price) => {
    // return [result success,err]
    try {

        const [row] = await query(
        "INSERT INTO phong(username,imagePath,title,addres,des,area,price) VALUES (?,?,?,?,?,?,?)",
        [username,imagePath,title,address,description,area,price]
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
};

module.exports = postModel;
