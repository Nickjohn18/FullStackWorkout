const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const trackerRoutes = require("./tracker-routes.js");

router.use("/workout", apiRoutes);
router.use("/tracker", trackerRoutes);
router.use("/", homeRoutes);

router.get("/", function (req, res, next) {
  res.render("homepage", { title: "Express" });
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
