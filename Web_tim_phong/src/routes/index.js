const verifyRoles = require("../utils/verify_roles");

const siteRouter = require("./site");
const authRoute = require("../routes/authRoutes");
const createUserRoute = require("../routes/createUserRoutes");
const postRoute = require("../routes/postRoutes");
const manageRoute = require("../routes/manageRoutes");
const i4Route = require("../routes/i4Routes")
const adminRoute = require("../routes/adminRoutes")

function route(app) {
  
  app.use("/", siteRouter);
  app.use("/login", authRoute);
  app.use("/admin", adminRoute);
  app.use("/signup", createUserRoute);
  app.use("/thong-tin", i4Route);
  app.use("/dang-tin", verifyRoles.isUser, postRoute);
  app.use("/quan-ly-tin", verifyRoles.isUser, manageRoute);

}

module.exports = route;
