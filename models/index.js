const User = require('./user');
const Item = require('./Item');
const Comment = require('./Comment')

User.hasMany(Item, {
    foreignKey: 'user_id'
})
Item.belongsTo(User, {
    foreignKey: 'user_id'
})
User.hasMany(Comment, {
    foreignKey: 'user_id'
})
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})
Item.hasMany(Comment, {
})
Comment.belongsTo(Item, {
    foreignKey: 'item_id'
})

module.exports = {User, Item, Comment}