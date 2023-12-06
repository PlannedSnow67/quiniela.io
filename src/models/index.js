
const { sequelize } = require('../config');
// db models
const Team = require("./team.model");
const League = require("./league.model");
const Country = require("./country.model");
const Stadium = require("./stadium.model");
const TeamLeague = require("./team.league.model");
const LeagueStadium = require("./league.stadium.model");

//


(async () => {
    try {
        await sequelize.sync();
        Object.values(models)
            .filter(model => typeof model.associate === 'function')
            .forEach(model => model.associate(models));

    } catch (error) {
        console.error('Error', error);
    }
})();

const models = {
    Team,
    League,
    Country,
    Stadium,
    TeamLeague,
    LeagueStadium
}



module.exports = {
    models
}






