const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeatherData(location);
    } else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchWeatherDataByCoords(lat, lon);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }
}

function fetchWeatherData(location) {
    fetch('https://maps.app.goo.gl/Yjp71GTzkaVBQAq87')
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function fetchWeatherDataByCoords(lat, lon) {
    fetch(`https://maps.app.goo.gl/P1mAxydHWc86FQPa7`)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    if (data.cod === 200) {
        weatherInfo.innerHTML = `
            <div>Location: ${data.name}</div>
            <div>Temperature: ${data.main.temp} °C</div>
            <div>Weather: ${data.weather[0].description}</div>
            <div>Humidity: ${data.main.humidity}%</div>
            <div>Wind Speed: ${data.wind.speed} m/s</div>
        `;
    } else {
        weatherInfo.innerHTML = `<div>Error: ${data.message}</div>`;
    }
}
