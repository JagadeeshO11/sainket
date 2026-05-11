// ─── FILL IN YOUR WEATHERAPI KEY ──────────────────────────────────────────
const WEATHER_API_KEY = 'YOUR_WEATHERAPI_KEY';
// Get free key at: https://www.weatherapi.com/
// ──────────────────────────────────────────────────────────────────────────

const axios = require('axios');
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

async function getWeatherByCity(city) {
  const response = await axios.get(BASE_URL, {
    params: { key: WEATHER_API_KEY, q: city, aqi: 'no' }
  });
  return response.data;
}

module.exports = { getWeatherByCity };
