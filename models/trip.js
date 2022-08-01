const { Model, DataTypes } = require('sequelize');
// const { FORCE } = require('sequelize/types/index-hints');
// const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
    {
        trip_budget: {
            type: DataTypes.FLOAT,
        }, 
        traveller_amt: {
            type: DataTypes.INTEGER,
        }, 
        locationId: {
            type: DataTypes.INTEGER,
            // primaryKey: true,
            // FOREIGNKEYS: true,
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
    modelName: 'trip'
  }
)

module.exports = Trip;