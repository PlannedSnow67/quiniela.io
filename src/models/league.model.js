const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config');
const Team = require('./team.model');

class League extends Model { }
League.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Countries',
            key: 'id'
        }
    },

},
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Leagues' // We need to choose the model name
    });


module.exports = League;