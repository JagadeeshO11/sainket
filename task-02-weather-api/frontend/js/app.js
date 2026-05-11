function show(id) { document.getElementById(id).classList.remove('hidden'); }
function hide(id) { document.getElementById(id).classList.add('hidden'); }

function renderWeather(data) {
  // WeatherAPI.com response structure
  document.getElementById('cityName').textContent    = data.location.name;
  document.getElementById('country').textContent     = data.location.country;
  document.getElementById('temperature').textContent = `${Math.round(data.current.temp_c)}°C`;
  document.getElementById('description').textContent = data.current.condition.text;
  document.getElementById('humidity').textContent    = `${data.current.humidity}%`;
  document.getElementById('windSpeed').textContent   = `${data.current.wind_kph} kph`;
  document.getElementById('feelsLike').textContent   = `${Math.round(data.current.feelslike_c)}°C`;
  document.getElementById('visibility').textContent  = `${data.current.vis_km} km`;
  show('weatherCard');
}

async function handleSearch() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) return;

  hide('weatherCard');
  hide('errorMsg');
  show('loader');

  try {
    const data = await fetchWeather(city);
    renderWeather(data);
  } catch (err) {
    document.getElementById('errorMsg').textContent = err.message;
    show('errorMsg');
  } finally {
    hide('loader');
  }
}

document.getElementById('searchBtn').addEventListener('click', handleSearch);
document.getElementById('cityInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});
