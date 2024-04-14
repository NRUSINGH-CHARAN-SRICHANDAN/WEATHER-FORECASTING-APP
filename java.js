function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '3a241852212ff2f53ad452f5b6ad853a'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
  const apiUrl = 'https:api.openweathermap.org/data/2.5/weather?q=';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;

      weatherInfo.innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = 'Error fetching weather data. Please try again later.';
    });
}