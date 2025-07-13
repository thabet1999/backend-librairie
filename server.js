const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// Connexion à MongoDB
const connectDB = require('./src/config/db');
connectDB();


const userRoutes = require('./src/routes/UserRoutes');
const bookRoutes = require('./src/routes/BookRoutes');
const categorieRoutes = require('./src/routes/CategorieRoutes');
const fournisseurRoutes = require('./src/routes/FournisseurRoutes');
const commandeFournisseurRoutes = require('./src/routes/CommandeFournisseurRoutes');
const ligneCommandeFournisseurRoutes = require('./src/routes/LigneCommandeFournisseurRoutes');
const exemplaireRoutes = require('./src/routes/ExemplaireRoutes');
const pretRoutes = require('./src/routes/PretRoutes');
const reservationRoutes = require('./src/routes/ReservationRoutes');
const amendeRoutes = require('./src/routes/AmendeRoutes');
const notificationRoutes = require('./src/routes/NotificationRoutes');

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/categories', categorieRoutes);
app.use('/api/commandes-fournisseurs', commandeFournisseurRoutes);
app.use('/api/ligne-commande-fournisseur', ligneCommandeFournisseurRoutes);
app.use('/api/exemplaires', exemplaireRoutes);
app.use('/api/prets', pretRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/amendes', amendeRoutes);
app.use('/api/notifications', notificationRoutes);

// Route d'accueil
app.get('/', (req, res) => {
  res.send(' API de gestion de bibliothèque universitaire opérationnelle.');
});

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Serveur démarré sur le port ${PORT}`);
});