const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SavingsGoal = sequelize.define('SavingsGoal', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    targetAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    currentAmount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    },
    deadline: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM('ACTIVE', 'COMPLETED', 'CANCELLED'),
      defaultValue: 'ACTIVE'
    }
  });

  return SavingsGoal;
}; 