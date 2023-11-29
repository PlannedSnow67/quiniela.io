const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './quiniela.io.sqlite'
});

module.exports = sequelize;