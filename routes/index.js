const router = require("express").Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>I'm sorry Dave, I'm afraid I can't do that !</h1>");
});

module.exports = router;
