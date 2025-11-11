const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mock data - in produzione useresti un database
const universities = require('./data/universities');

// API Routes
app.get('/api/universities', (req, res) => {
  res.json(universities);
});

app.get('/api/universities/:id', (req, res) => {
  const university = universities.find(u => u.id === req.params.id);
  if (university) {
    res.json(university);
  } else {
    res.status(404).json({ error: 'University not found' });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
