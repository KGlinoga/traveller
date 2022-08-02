const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init(
    {
                // the following code wasn't in Joe's demo
        // traveller_id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement:true
        // }, 
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
},
{
    sequelize,
            // the following code wasn't in Joe's demo
    // timestamps: false,
    // freezeTableName: true,
    // underscored: true,
    // modelName: 'traveller'
  }
)
module.exports=Traveller