const { SavingsGoal } = require('../models');

exports.createGoal = async (req, res) => {
  try {
    const goal = await SavingsGoal.create({
      ...req.body,
      UserId: req.user.id
    });
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await SavingsGoal.findAll({
      where: { UserId: req.user.id }
    });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 