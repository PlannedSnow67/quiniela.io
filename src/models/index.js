const { sequelize } = require('../config');
const Server = require("./server");
// db models
const Team = require("./team.model");
const League = require("./league.model");
const Country = require("./country.model");
const Stadium = require("./stadium.model");
//

(async () => {
    try {
        await sequelize.sync();

    } catch (error) {
        console.error('Error', error);
    }
})();


module.exports = {
    Server,
    Team,
    League,
    Country,
    Stadium
}






