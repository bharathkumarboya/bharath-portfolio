const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const movieRoutes = require('./movies');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/netflixClone', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/movies', movieRoutes);

app.listen(5000, () => console.log('Backend running on port 5000'));