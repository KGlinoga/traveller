const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
    {
        location_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        }, 
        location_name: {
            type: DataTypes.STRING
        }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location'
  }
)

module.exports = Location;