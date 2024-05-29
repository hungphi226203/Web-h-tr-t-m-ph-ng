const i4Model = require("../model/i4");

const i4Controller = {
  i4: async (req, res) => {
    try {
      if (!req.session?.user?.username) {
        return res.redirect("/");
      }
      
      const username = req.session.user.username;
      const data = await i4Model.i4({ username });

      res.render('thongtin', {
        data: data[0],
        user: req.session.user
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).send('Error');
    }
  },
  
  capnhat: async (req, res) => {
    try {
      
      console.log(req.body)

      const {username, pass, role, fullname, id_card, phone, email } = req.body;
      const [result, error] = await i4Model.capnhat(username, pass, role, fullname, id_card, phone, email);

      if (error) {
        return res.status(500).json({ message: "Cập nhật thất bại", error });
      } else {
        return res.status(200).json({ message: "Cập nhật thành công" });
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      res.status(500).json({ message: "Lỗi xảy ra" });
    }
  },
};

module.exports = i4Controller;
