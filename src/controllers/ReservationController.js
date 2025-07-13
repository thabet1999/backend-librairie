const Reservation = require('../models/Resrvation');

exports.createReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// controllers/AmendeController.js
const Amende = require('../models/Amende');

exports.createAmende = async (req, res) => {
  try {
    const amende = new Amende(req.body);
    await amende.save();
    res.status(201).json(amende);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllAmendes = async (req, res) => {
  try {
    const amendes = await Amende.find();
    res.status(200).json(amendes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAmendeById = async (req, res) => {
  try {
    const amende = await Amende.findById(req.params.id);
    if (!amende) return res.status(404).json({ message: 'Amende not found' });
    res.status(200).json(amende);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAmende = async (req, res) => {
  try {
    const amende = await Amende.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!amende) return res.status(404).json({ message: 'Amende not found' });
    res.status(200).json(amende);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAmende = async (req, res) => {
  try {
    const amende = await Amende.findByIdAndDelete(req.params.id);
    if (!amende) return res.status(404).json({ message: 'Amende not found' });
    res.status(200).json({ message: 'Amende deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

