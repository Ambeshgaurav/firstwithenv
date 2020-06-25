const Sequelize = require('sequelize');
const sequelize = require('../config/config');

const user = sequelize.define('user3', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age:
  {
    type:Sequelize.STRING,
    allowNull: false
  }
});



module.exports = user;