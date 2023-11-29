const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config');
const Team = require('./team.model');


class Country extends Model { }
Country.init({
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

},
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Countries' // We need to choose the model name
    });


module.exports = Country;