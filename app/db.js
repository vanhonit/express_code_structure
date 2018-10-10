const Sequelize = require('sequelize');

const env = process.env;
const db = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});
module.export = db;
