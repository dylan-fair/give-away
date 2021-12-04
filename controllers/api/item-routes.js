const router = require("express").Router();
//const sequelize = require("../../config/connection");
const { User, Item, Review } = require("../../models");

router.get("/", (req, res) => {
  Item.findAll({
    attributes: ["id", "name", "url","item_text", "user_id"],
    include: [
      {
        model: Review,
        attributes: ["id", "context", "rating"],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbItemData) => res.json(dbItemData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "name", "review_rating"],
    include: [
      {
        model: Review,
        attributes: ["id", "context", "rating"],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbItemData) => {
      if (!dbItemData) {
        res.status(404).json({ message: "No item found with this id" });
        return;
      }
      res.json(dbItemData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  if (req.session) {
    Item.create({
      name: req.body.name,
      url: req.body.url,
      item_text: req.body.item_text,
      user_id: req.session.user_id,
    })
      .then((dbItemData) => res.json(dbItemData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});


router.delete("/:id", (req, res) => {
  console.log("id", req.params.id);
  Item.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbItemData) => {
      if (!dbItemData) {
        res.status(404).json({ message: "No item found with this id" });
        return;
      }
      res.json(dbItemData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
