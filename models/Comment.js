const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    context: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [0, 50]
        }
    },

    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'user',
            key: 'id'
        },
    },
    item_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'item',
            key: 'id'
        },
    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
}

)

module.exports = Comment;