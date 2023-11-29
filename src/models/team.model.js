const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config');
const { Country, League, Stadium } = require('.');

class Team extends Model { }
Team.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    leagueId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: League,
            key: 'id'
        }
    },
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: 'id'
        }
    },
    stadiumId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Stadium,
            key: 'id'
        }
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Teams' // We need to choose the model name
});


module.exports = Team;