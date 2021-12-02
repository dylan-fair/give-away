const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init({
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
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    modelName: 'review'
}

)

module.exports = Review;