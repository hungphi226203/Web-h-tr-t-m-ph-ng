const verifyRoles = {
  isAdmin: (req, res, next) => {
    const user = req.session.user;
    if (user) {
      if (user.role !== "admin") {
        console.warn("Require Admin role");
        return res.send(`
          <html>
            <body>
              <script>
                alert("Require Admin role");
                window.location.href = "/admin";
              </script>
            </body>
          </html>
        `);
      }
      return next();
    } else {
      return res.redirect("/login");
    }
  },
  isAdminOrMode: (req, res, next) => {
    const user = req.session.user;
    if (user) {
      if (user.role === "admin" || user.role === "mode") {
        return next();
      } else {
        return res.status(403).send("Require Admin or Mode role");
      }
    } else {
      return res.redirect("/login");
    }
  },
  isUser: (req, res, next) => {
    const user = req.session.user;
    if (user) {
      return next();
    } else {
      return res.redirect("/login");
    }
  },
};

module.exports = verifyRoles;