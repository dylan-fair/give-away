const router = require("express").Router();
const { Review } = require("../../models");

router.get("/", (req, res) => {
  Review.findAll()
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  if (req.session) {
    Review.create({
      context: req.body.context,
      rating: req.body.rating,
    })
      .then((dbReviewData) => res.json(dbReviewData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete("/:id", (req, res) => {
  if (req.session) {
    Review.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbReviewData) => {
        if (!dbReviewData) {
          res.status(404).json({ message: "No reviews found with this id!" });
          return;
        }
        res.json(dbReviewData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

module.exports = router;
