const apiKey ='https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={a19999ae3ca37292a4f34a9d91df9f77}';

function searchWeather() {
    const city = document.getElementById('cityInput').value;
//Function to fetch weather data for the city using API

//Update the UI with the weather data
}

//Function to display current weather
function displayCurrentWeather(weatherData) {
    const currentWeatherDiv = document.getElementById('currentWeather');
//Update the currentWeather with current weather
}

//Function to display 5-day forecast
function displayForecast(weatherData) {
    const forecastDiv = document.getElementById('forecast');
// Update the forecast with the forecast
}

//Function to update search history
function updateSearchHistory(city) {
    const searchHistoryDiv = document.getElementById('searchHistory');
//Update the searchHistory local storage with new city
}

//Function for when search history is clicked
document.getElementById('searchHistory').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName == 'BUTTON') {
        const city = event.target.textContent;
        searchWeather(city);
    }
});