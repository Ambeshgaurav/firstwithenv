const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
 
let sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_USER_PASSWORD, {
 host: process.env.HOST,
 dialect: 'mysql',
 pool: {
   max: 5,
   min: 0,
   acquire: 30000,
   idle: 10000
 }
});


 
module.exports = sequelize;