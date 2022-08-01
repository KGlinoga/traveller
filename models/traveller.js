const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init(
    {
        traveller_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        }, 
        traveller_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'traveller'
  }
)
module.exports = Traveller;