const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');
const Team = require('./team.model');

const League = sequelize.define('League', {
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

League.hasMany(Team, { foreignKey: 'leagueId' });

module.exports = League;