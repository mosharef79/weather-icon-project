const apiKey = 'f28ba83e93eba0968590fc739a7697a4'; 
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherIcon = document.getElementById('weatherIcon');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const description = document.getElementById('description');

getWeatherBtn.addEventListener('click', getWeather);

function getWeather() {
  const city = cityInput.value;

  if (!city) {
    alert('Please enter a city name');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0];
      const main = data.main;

      
      cityName.textContent = data.name;
      temperature.textContent = `${main.temp}°C`;
      humidity.textContent = `Humidity: ${main.humidity}%`;
      description.textContent = `Condition: ${weather.description}`;
      weatherIcon.textContent = getWeatherIcon(weather.main);

     
      weatherIcon.className = ''; 
      weatherIcon.classList.add(getIconClass(weather.main));
    })
    .catch(err => {
      console.log('Error:', err);
      alert('Could not fetch weather data. Please try again.');
    });
}

function getWeatherIcon(weatherCondition) {
  switch (weatherCondition.toLowerCase()) {
    case 'clear':
      return '☀️'; 
    case 'clouds':
      return '☁️';
    case 'rain':
      return '🌧️'; 
    case 'snow':
      return '❄️'; 
    default:
      return '🌈'; 
  }
}

function getIconClass(weatherCondition) {
  switch (weatherCondition.toLowerCase()) {
    case 'clear':
      return 'sun'; 
    case 'clouds':
      return 'cloud'; 
    case 'rain':
      return 'rain'; 
    default:
      return ''; 
  }
}
