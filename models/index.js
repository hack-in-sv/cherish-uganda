const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);

const sequelize = new Sequelize(process.env.DATABASE_URL);

const loadModels = (modelDir, db = {}) => {
  const isModelFile = file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  };
  
  const importModel = file => {
    // skip if model already loaded
    const model = sequelize.import(path.join(modelDir, file));
    db[model.name] = model;
  }

  // TODO load models from associated models as well.
  fs.readdirSync(modelDir)
    .filter(isModelFile)
    .forEach(importModel);

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
}

const db = loadModels(__dirname);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.modules = {};

module.exports = db;