const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-tracker-app', 'root', 'Pgoen201gssbr$', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;