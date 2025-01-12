const { Transaction } = require('../models');

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({
      ...req.body,
      UserId: req.user.id
    });
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      where: { UserId: req.user.id },
      order: [['date', 'DESC']]
    });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 