const postModel = require("../model/post");

const postController = {
  form: (req, res) => {
    res.render('dang_tin',{user : req.session.user});
  },

  postP: async (req, res) => {
      try {

        const imageUrl = req.files.map(file => file.path).join(',');

        const {title, address, description, area, price } = req.body;
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
