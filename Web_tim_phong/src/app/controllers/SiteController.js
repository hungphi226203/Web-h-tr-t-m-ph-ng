const postModel = require("../model/list-post");

class SiteController {
  async home(req, res) {
    try {
      const data = await postModel.getPost();
      res.render("home", {
        data,
        user: req.session.user
      });
    } catch (error) {
      res.status(500).send("Lỗi server");
    }
  }

  async homeafter(req, res) {
    try {
      const { quan, minPrice, maxPrice, minArea, maxArea } = req.query;

      const data = await postModel.getPostByDK(minPrice, maxPrice, minArea, maxArea, quan);
      res.render("home", {
        data,
        user: req.session.user
      });
    } catch (error) {
      res.status(500).send("Lỗi server");
    }
  }

  async logout(req, res) {
    req.session.user = null;
    req.session.save(function (err) {
      if (err) next(err);

      req.session.regenerate(function (err) {
        if (err) next(err);
        res.redirect("/");
      });
    });
  }

  async xem(req, res) {
    const id = req.params.id;
    try {
      const [data] = await postModel.getPostById(id);
      res.render("xem", { data: data[0] });
    } catch (error) {
      res.status(500).send("Lỗi server");
    }
  }
}

module.exports = new SiteController();
