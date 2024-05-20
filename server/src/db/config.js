const path = require('path')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: path.join(__dirname, '..', 'db.sqlite')
})
module.exports = sequelize
