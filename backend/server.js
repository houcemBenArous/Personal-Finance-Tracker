const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./src/models');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API Financial Tracker' });
});

// Sync database
db.sequelize.sync({ force: true }) // Utilisez { force: false } en production
  .then(() => {
    console.log('Base de données synchronisée');
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  })
  .catch(err => {
    console.error('Erreur de synchronisation de la base de données:', err);
  }); 