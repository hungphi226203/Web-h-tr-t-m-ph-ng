const verifyRoles = require("../utils/verify_roles");

const siteRouter = require("./site");
const authRoute = require("../routes/authRoutes");
const createUserRoute = require("../routes/createUserRoutes");
const postRoute = require("../routes/postRoutes");
const manageRoute = require("../routes/manageRoutes");

function route(app) {
  
  app.use("/", siteRouter);
  app.use("/login", authRoute);
  app.use("/signup", createUserRoute);
  app.use("/dang-tin", verifyRoles.isUser, postRoute);
  app.use("/quan-ly-tin", verifyRoles.isUser, manageRoute);

}

module.exports = route;
