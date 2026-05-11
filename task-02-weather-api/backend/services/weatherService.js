require('dotenv').config();

const axios = require('axios');
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

async function getWeatherByCity(city) {
  const key = process.env.WEATHER_API_KEY;
  if (!key) throw new Error('WEATHER_API_KEY is not set in .env');

  const response = await axios.get(BASE_URL, {
    params: { key, q: city, aqi: 'no' }
  });
  return response.data;
}

module.exports = { getWeatherByCity };
