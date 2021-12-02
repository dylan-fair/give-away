const User = require('./user');
const Item = require('./item');
const Review = require('./reviews')

User.hasMany(Item, {
    foreignKey: 'user_id'
})
Item.belongsTo(User, {
    foreignKey: 'user_id'
})
User.hasMany(Review, {
    foreignKey: 'user_id'
})
Review.belongsTo(User, {
    foreignKey: 'user_id'
})
Item.hasMany(Review, {
})
Review.belongsTo(Item, {
    foreignKey: 'item_id'
})

module.exports = {User, Item, Review}