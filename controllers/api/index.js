const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const itemRoutes = require("./item-routes");
const reviewRoutes = require("./reviews-routes");

router.use("/users", userRoutes);
router.use("/item", itemRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;