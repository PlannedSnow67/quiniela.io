// En associations.js
const { models } = require('./index');

const { Team, League, Country, Stadium } = models;

//teams
Team.belongsTo(Country, { foreignKey: 'countryId' });
Team.belongsTo(Stadium, { foreignKey: 'stadiumId' });

//countries
Country.hasMany(Team, { foreignKey: 'countryId' });

//stadiums
Stadium.hasMany(Team, { foreignKey: 'stadiumId' });
