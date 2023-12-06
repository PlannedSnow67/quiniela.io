const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config');

class LeagueStadium extends Model { }

LeagueStadium.init({
    leagueId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Leagues',
            key: 'id'
        }
    },
    stadiumId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Stadiums',
            key: 'id'
        }
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'LeagueStadium' // We need to choose the model name
});

module.exports = LeagueStadium;