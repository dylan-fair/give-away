const { Item } = require("../models");

const itemdata = [
  {
    item_text: "Nunc rhoncus dui vel sem.",
    name: "item description",
    user_id: 1,
  },
  {
    item_text:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    name: "item description",
    user_id: 8,
  },
  {
    item_text: "Aliquam erat volutpat. In congue.",
    name: "item description",
    user_id: 10,
  },
  {
    item_text:"Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    name: "item description",
    user_id: 18,
  },
  {
    item_text: "In hac habitasse platea dictumst.",
    name: "item description",
    user_id: 5,
  },
  {
    item_text: "Vivamus vestibulum sagittis sapien.",
    name: "item description",
    user_id: 20,
  },
  {
    item_text:"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    name: "item description",
    user_id: 7,
  },
  {
    item_text: "Sed vel enim sit amet nunc viverra dapibus.",
    name: "item description",
    user_id: 4,
  },
  {
    item_text:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    name: "item description",
    user_id: 12,
  },
  {
    item_text: "Morbi a ipsum.",
    name: "item description",
    user_id: 20,
  },
  {
    item_text:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    name: "item description",
    user_id: 14,
  },
  {
    item_text: "Donec ut mauris eget massa tempor convallis.",
    name: "item description",
    user_id: 4,
  },
  {
    item_text:
      'Curabitu"lorem" in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    name: "item description",
    user_id: 9,
  },
  {
    item_text:
      'Fusce co"lorem"gue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    name: "item description",
    user_id: 14,
  },
  {
    item_text: "Quisque porta volutpat erat.",
    name: "item description",
    user_id: 2,
  },
  {
    item_text: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    name: "item description",
    user_id: 2,
  },
  {
    item_text:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    name: "item description",
    user_id: 11,
  },
  {
    item_text: "Curabitur convallis.",
    name: "item description",
    user_id: 4,
  },
  {
    item_text:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    name: "item description",
    user_id: 10,
  },
  {
    item_text: "Morbi non quam nec dui luctus rutrum.",
    name: "item description",
    user_id: 8,
  },
  {
    item_text:
      'Donec od"lorem"o justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    name: "item description",
    user_id: 10,
  },
  {
    item_text:
      'Phasellu"lorem" id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    name: "item description",
    user_id: 15,
  },
  {
    item_text:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    name: "item description",
    user_id: 3,
  },
  {
    item_text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    name: "item description",
    user_id: 15,
  },
  {
    item_text: "Nam tristique tortor eu pede.",
    name: "item description",
    user_id: 16,
  },
  {
    item_text:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    name: "item description",
    user_id: 18,
  },
  {
    item_text: "Proin eu mi. Nulla ac enim.",
    name: "item description",
    user_id: 10,
  },
  {
    item_text: "Sed ante. Vivamus tortor.",
    name: "item description",
    user_id: 5,
  },
  {
    item_text: "Aliquam quis turpis eget elit sodales scelerisque.",
    name: "item description",
    user_id: 1,
  },
  {
    item_text: "Donec quis orci eget orci vehicula condimentum.",
    name: "item description",
    user_id: 19,
  },
  {
    item_text: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    name: "item description",
    user_id: 3,
  },
  {
    item_text:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    name: "item description",
    user_id: 14,
  },
  {
    item_text: "Maecenas ut massa quis augue luctus tincidunt.",
    name: "item description",
    user_id: 8,
  },
  {
    item_text: "Cras in purus eu magna vulputate luctus.",
    name: "item description",
    user_id: 11,
  },
  {
    item_text: "Etiam vel augue. Vestibulum rutrum rutrum neque.",
    name: "item description",
    user_id: 5,
  },
  {
    item_text: "Proin at turpis a pede posuere nonummy.",
    name: "item description",
    user_id: 19,
  },
  {
    item_text:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    name: "item description",
    user_id: 19,
  },
  {
    item_text: "Vestibulum ac est lacinia nisi venenatis tristique.",
    name: "item description",
    user_id: 6,
  },
  {
    item_text: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    name: "item description",
    user_id: 6,
  },
  {
    item_text: "Integer ac leo. Pellentesque ultrices mattis odio.",
    name: "item description",
    user_id: 19,
  },
  {
    item_text:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    name: "item description",
    user_id: 1,
  },

  {
    item_text: "Proin risus. Praesent lectus.",
    name: "item description",
    user_id: 1,
  },
  {
    item_text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.",
    name: "item description",
    user_id: 12,
  },
];

const seedItems = () => Item.bulkCreate(itemdata);

module.exports = seedItems;
