const { Model, DataTypes } = require('sequelize');

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
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
}

)

module.exports = Review;