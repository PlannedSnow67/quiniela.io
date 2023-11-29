const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config');
const Team = require('./team.model');

class Stadium extends Model { }
Stadium.init({
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

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Stadiums' // We need to choose the model name
});


module.exports = Stadium;