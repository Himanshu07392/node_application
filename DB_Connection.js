let sequelize = require('sequelize') // This will import all the fn
// let { Sequelize } = require('sequelize') // This will import specific function
// { keys: values, keys: values}
let pg = require('pg')
const dbConnection = new sequelize.Sequelize('Test_db', 'postgres', '12345678', {
    host: 'localhost',
    dialect: 'postgres', // 'mysql'
    logging: false
})

module.exports = { dbConnection }