const { Review } = require('../models');

const reviewdata = [
  {
    context: 'Donec posuere metus vitae ipsum.',
    rating: 5,
    user_id: 10,
    //item_id: 1,
  },
  {
    context: 'Morbi non quam nec dui luctus rutrum.',
    rating: 5,
    user_id: 8,
    //item_id: 1,
  },
  {
    context: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    rating: 5,
    user_id: 1,
    //item_id: 1,
  },
  {
    context: 'Nunc purus.',
    rating: 5,
    user_id: 4,
    //item_id: 1,
  },
  {
    context: 'Pellentesque eget nunc.',
    rating: 5,
    user_id: 7,
    //item_id: 1,
  },
  {
    context: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    rating: 5,
    user_id: 4,
    //item_id: 1,
  },
  {
    context: 'In hac habitasse platea dictumst.',
    rating: 5,
    user_id: 1,
    //item_id: 1,
  },
  {
    context: 'Morbi non quam nec dui luctus rutrum.',
    rating: 5,
    user_id: 1,
    //item_id: 1,
  },
  {
    context: 'Duis ac nibh.',
    rating: 5,
    user_id: 9,
    //item_id: 1,
  },
  {
    context: 'Curabitur at ipsum ac tellus semper interdum.',
    rating: 5,
    user_id: 5,
    //item_id: 1,
  },
  {
    context: 'In hac habitasse platea dictumst.',
    rating: 5,
    user_id: 3,
    //item_id: 1,
  },
  {
    context: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    rating: 5,
    user_id: 10,
    //item_id: 1,
  },
  {
    context: 'Donec dapibus.',
    rating: 5,
    user_id: 8,
    //item_id: 1,
  },
  {
    context: 'Nulla tellus.',
    rating: 5,
    user_id: 3,
    //item_id: 1,
  },
  {
    context: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    rating: 5,
    user_id: 3,
    //item_id: 1,
  },
  {
    context:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      rating: 5,
    user_id: 7,
    //item_id: 1,
  },
  {
    context: 'In hac habitasse platea dictumst.',
    rating: 5,
    user_id: 6,
    //item_id: 1,
  },
  {
    context: 'Etiam justo.',
    rating: 5,
    user_id: 4,
   //item_id: 1,
  },
  {
    context: 'Nulla ut erat id mauris vulputate elementum.',
    rating: 5,
    user_id: 6,
    //item_id: 1,
  },
  {
    context: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    rating: 5,
    user_id: 7,
   //item_id: 1,
  }
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;
