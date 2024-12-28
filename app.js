const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const mosqueRoutes = require('./routes/mosqueRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
mongoose.connect('mongodb+srv://siddiqueansari3:2JBasf71N8AJelGF@salahtime.nvzok.mongodb.net/?retryWrites=true&w=majority&appName=salahtime', {
    useUnifiedTopology: true,
});

// Routes
app.use('/mosques', mosqueRoutes);

// Server
app.listen(5002, () => {
  console.log('Server is running on port 5002');
});