const { Sequelize } = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    port: config.development.port
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Initialiser les modèles
db.User = require('./user.model')(sequelize);
db.Transaction = require('./transaction.model')(sequelize);
db.SavingsGoal = require('./savings_goal.model')(sequelize);

// Définir les relations
db.User.hasMany(db.Transaction);
db.Transaction.belongsTo(db.User);

db.User.hasMany(db.SavingsGoal);
db.SavingsGoal.belongsTo(db.User);

module.exports = db; 