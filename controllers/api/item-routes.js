const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Item, Review } = require("../../models");

router.get("/", (req, res) => {
  Item.findAll({
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
        model: Comment,
        attributes: ["id", "comment_text", "item_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
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

// router.item("/", (req, res) => {
//   // expects {title: 'Taskmaster goes public!', item_url: 'https://taskmaster.com/press', user_id: 1}
//   if (req.session) {
//     Item.create({
//       title: req.body.title,
//       item_url: req.body.item_url,
//       user_id: req.session.user_id,
//     })
//       .then((dbItemData) => res.json(dbItemData))
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   }
// });

// router.put("/upvote", (req, res) => {
//   // custom static method created in models/Item.js
//   if (req.session) {
//     Item.upvote(
//       { ...req.body, user_id: req.session.user_id },
//       { Vote, Comment, User }
//     )
//       .then((updatedVoteData) => res.json(updatedVoteData))
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   }
// });

// router.put("/:id", (req, res) => {
//   Item.update(
//     {
//       title: req.body.title,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((dbItemData) => {
//       if (!dbItemData) {
//         res.status(404).json({ message: "No item found with this id" });
//         return;
//       }
//       res.json(dbItemData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete("/:id", (req, res) => {
//   console.log("id", req.params.id);
//   Item.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbItemData) => {
//       if (!dbItemData) {
//         res.status(404).json({ message: "No item found with this id" });
//         return;
//       }
//       res.json(dbItemData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
