const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
    {
            // the following code wasn't in Joe's demo
        // location_id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement:true
        // }, 
        location_name: {
            type: DataTypes.STRING
        }
},
{
    sequelize,
                 // the following code wasn't in Joe's demo
    // timestamps: false,
    // freezeTableName: true,
    // underscored: true,
    // modelName: 'location'
  }
)

module.exports = Location