const fetch = require('node-fetch');

const getMovies = async (req, res) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};

module.exports = { getMovies };
