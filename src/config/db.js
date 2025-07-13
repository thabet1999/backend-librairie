const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    console.log("MONGO_URI from .env :", process.env.MONGO_URI); // Debug ici
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connecté');
  } catch (error) {
    console.error('Erreur de connexion MongoDB :', error);
    process.exit(1);
  }
};

module.exports = connectDB;
