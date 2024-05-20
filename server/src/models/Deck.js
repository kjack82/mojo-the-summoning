const { DataTypes } = require('sequelize')
const sequelize = require('../db/config.js')

const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
})

module.exports = Deck