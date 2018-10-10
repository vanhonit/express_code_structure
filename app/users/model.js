import { Sequelize } from 'sequelize';
import db from 'app/db';

const User = db.define('user', {
  first_name: Sequelize.STRING(50),
  middle_name: Sequelize.STRING(50),
  last_name: Sequelize.STRING(50),
  email: Sequelize.STRING(255),
  phone: Sequelize.STRING(20)
});
