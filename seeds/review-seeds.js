const { Review } = require('../models');

const reviewdata = [
  {
    context: 'Donec posuere metus vitae ipsum.',
    rating: 5,
    user_id: 10,
    item_id: 1,
  },
  {
    context: 'Morbi non quam nec dui luctus rutrum.',
    rating: 5,
    user_id: 8,
    item_id: 1,
  },
  {
    context: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    rating: 5,
    user_id: 1,
    item_id: 1,
  },
  {
    context: 'Nunc purus.',
    rating: 5,
    user_id: 4,
    item_id: 1,
  },
  {
    context: 'Pellentesque eget nunc.',
    rating: 5,
    user_id: 7,
    item_id: 1,
  },
  {
    context: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    rating: 5,
    user_id: 4,
    item_id: 1,
  },
  {
    context: 'In hac habitasse platea dictumst.',
    rating: 5,
    user_id: 1,
    item_id: 1,
  },
  {
    context: 'Morbi non quam nec dui luctus rutrum.',
    rating: 5,
    user_id: 1,
    item_id: 1,
  },
  {
    context: 'Duis ac nibh.',
    rating: 5,
    user_id: 9,
    item_id: 1,
  },
  {
    context: 'Curabitur at ipsum ac tellus semper interdum.',
    rating: 5,
    user_id: 5,
    item_id: 1,
  },
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;
