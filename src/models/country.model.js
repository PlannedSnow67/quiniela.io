const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');
const Team = require('./team.model');

const Country = sequelize.define('Country', {
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

Country.hasMany(Team, { foreignKey: 'countryId' });

module.exports = Country;