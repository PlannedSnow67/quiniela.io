// En associations.js
const { models } = require('./index');

const { Team, League, Country, Stadium } = models;

//teams
Team.belongsTo(League, { foreignKey: 'leagueId' });
Team.belongsTo(Country, { foreignKey: 'countryId' });
Team.belongsTo(Stadium, { foreignKey: 'stadiumId' });

//leagues
League.hasMany(Team, { foreignKey: 'leagueId' });

//countries
Country.hasMany(Team, { foreignKey: 'countryId' });
Stadium.hasMany(Team, { foreignKey: 'stadiumId' });