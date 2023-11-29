const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');
const { Country, League, Stadium } = require('.');


const Team = sequelize.define('Team', {
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
});

Team.belongsTo(League, { foreignKey: 'leagueId' });
Team.belongsTo(Country, { foreignKey: 'countryId' });
Team.belongsTo(Stadium, { foreignKey: 'stadiumId' });

module.exports = Team;