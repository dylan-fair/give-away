const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const itemRoutes = require("./item-routes");
const reviewRoutes = require("./review-routes");

router.use("/User", userRoutes);
router.use("/Item", itemRoutes);
router.use("/Review", reviewRoutes);

module.exports = router;
