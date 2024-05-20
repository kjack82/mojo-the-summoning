const { DataTypes } = require('sequelize')
const sequelize = require('../db/config.js')

const User = sequelize.define('User', {
    username: DataTypes.STRING
})

module.exports = User