const mongoose = require('mongoose');

const LocalizedStringSchema = new mongoose.Schema({
  en: { type: String, required: true },
  ur: { type: String, required: true }
});

const MosqueSchema = new mongoose.Schema({
  name: LocalizedStringSchema,
  location: LocalizedStringSchema,
  timings: {
    fajr: LocalizedStringSchema,
    dhuhr: LocalizedStringSchema,
    asr: LocalizedStringSchema,
    maghrib: LocalizedStringSchema,
    isha: LocalizedStringSchema,
    juma: LocalizedStringSchema
  }
});

module.exports = mongoose.model('Mosque', MosqueSchema);