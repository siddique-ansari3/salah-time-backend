const express = require('express');
const router = express.Router();
const Mosque = require('../models/Mosque');

// Get all mosques
router.get('/', async (req, res) => {
  try {
    const mosques = await Mosque.find();
    res.json(mosques);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a mosque by ID
router.get('/:id', async (req, res) => {
  try {
    const mosque = await Mosque.findById(req.params.id);
    if (!mosque) {
      return res.status(404).json({ message: 'Mosque not found' });
    }
    res.json(mosque);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new mosque
router.post('/', async (req, res) => {
  const mosque = new Mosque({
    name: req.body.name,
    location: req.body.location,
    timings: req.body.timings,
  });

  try {
    const newMosque = await mosque.save();
    res.status(201).json(newMosque);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a mosque by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedMosque = await Mosque.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        location: req.body.location,
        timings: req.body.timings,
      },
      { new: true } // Return the updated document
    );

    if (!updatedMosque) {
      return res.status(404).json({ message: 'Mosque not found' });
    }

    res.json(updatedMosque);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a mosque by ID
router.delete('/:id', async (req, res) => {
  try {
    const mosque = await Mosque.findByIdAndDelete(req.params.id);
    if (!mosque) {
      return res.status(404).json({ message: 'Mosque not found' });
    }
    res.json({ message: 'Mosque deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;