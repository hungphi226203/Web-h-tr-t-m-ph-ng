const postModel = require("../model/post");

const postController = {
  form: (req, res) => {
    res.render('dang_tin', { layout: "account" });
  },

  postP: async (req, res) => {
      try {

        const imageUrl = req.files.map(file => file.path).join(', ');

        const {title, description, area, price } = req.body;
        const address = `${req.body.addres} ${req.body.tenduong}, ${req.body.quan}, ${req.body.thanhpho}, ${req.body.tinh}`;

        await postModel.postP(req.session.user.username, imageUrl, title, address, description, area, price);
        res.redirect("/");

      } catch (errPost) {

        return res.render('dang_tin', {

          layout: "account",
          err: errPost,

        });
      }
    }
};

module.exports = postController;
