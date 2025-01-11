const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./src/models');
const authRoutes = require('./src/routes/auth.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API Financial Tracker' });
});

// Sync database
db.sequelize.sync({ force: true })
  .then(() => {
    console.log('Base de données synchronisée');
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  })
  .catch(err => {
    console.error('Erreur de synchronisation de la base de données:', err);
  }); 