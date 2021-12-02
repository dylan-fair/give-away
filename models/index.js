const User = require('./User');
const Item = require('./Item');
const Review = require('./Review')

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