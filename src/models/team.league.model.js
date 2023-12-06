const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config');

class TeamLeague extends Model { }

TeamLeague.init({
    teamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'id'
        }
    },
    leagueId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Leagues',
            key: 'id'
        }
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'TeamLeague' // We need to choose the model name
});


module.exports = TeamLeague;