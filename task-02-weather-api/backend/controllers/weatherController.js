const weatherService = require('../services/weatherService');

const getWeather = async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ success: false, message: 'City is required' });

  try {
    const data = await weatherService.getWeatherByCity(city);
    res.json({ success: true, data });
  } catch (err) {
    const status = err.response?.status || 500;
    const message = err.response?.data?.error?.message || 'Failed to fetch weather';
    res.status(status).json({ success: false, message });
  }
};

module.exports = { getWeather };
