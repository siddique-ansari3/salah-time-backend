const mongoose = require('mongoose');

const MosqueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  name_urdu: { type: String, required: true },
  location: { type: String, required: true },
  timings: {
    fajr: { type: String, required: true },
    dhuhr: { type: String, required: true },
    asr: { type: String, required: true },
    maghrib: { type: String, required: true },
    isha: { type: String, required: true },
    juma: { type: String, required: true },
  },
});

module.exports = mongoose.model('Mosque', MosqueSchema);