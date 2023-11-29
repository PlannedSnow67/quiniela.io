const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');
const Team = require('./team.model');

const Stadium = sequelize.define('Stadium', {
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

});

Stadium.hasMany(Team, { foreignKey: 'stadiumId' });

module.exports = Stadium;