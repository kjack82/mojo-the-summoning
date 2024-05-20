const { DataTypes } = require('sequelize')
const sequelize = require('../db/config.js')

const Attack = sequelize.define('Card', {
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
})

module.exports = card