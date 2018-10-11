import db from '../db';

const Sequelize = require('sequelize');

const User = db.define('user', {
  first_name: Sequelize.STRING(50),
  middle_name: Sequelize.STRING(50),
  last_name: Sequelize.STRING(50),
  email: Sequelize.STRING(255),
  phone: Sequelize.STRING(20)
});
module.exports = User;
