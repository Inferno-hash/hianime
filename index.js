require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 7860;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('DB connection error', err));

app.get('/', (req, res) => {
  res.json({ msg: 'Hianime backend live!' });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
