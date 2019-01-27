const Sequelize = require('sequelize');

const DEFAULT_OPTIONS = {
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  },
}

class DatabaseManager {
  config(opts = DEFAULT_OPTIONS) {
    console.info('Connecting to database ...')
    this.sequelize = new Sequelize(process.env.DATABASE_URL, opts);

    this.sequelize
      .authenticate()
      .then(() => console.info('Connection has been established successfully.')) 
      .catch(err => console.error('Unable to connect to the database:', err))
  }

  close() {
    this.sequelize.close();
  }
};

mgr = new DatabaseManager
console.log(mgr)
module.exports = new DatabaseManager
