const { dbConnection } = require('../DB_Connection')
const { DataTypes } = require("sequelize")

const User = dbConnection.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
})

module.exports = {User}