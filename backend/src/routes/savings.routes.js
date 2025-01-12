const express = require('express');
const router = express.Router();
const savingsController = require('../controllers/savings.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

router.use(verifyToken);
router.post('/', savingsController.createGoal);
router.get('/', savingsController.getGoals);

module.exports = router; 