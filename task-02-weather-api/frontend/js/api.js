// Calls our own backend — keeps API key safe on server side
async function fetchWeather(city) {
  const response = await fetch(`http://localhost:3002/api/weather?city=${encodeURIComponent(city)}`);
  const json = await response.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}
