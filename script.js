const searchBtn = document.getElementById('searchBtn');
const currentWeather = document.getElementById('currentWeather');
searchBtn.addEventListener('click', searchWeather)
function searchWeather() {
    const city = document.getElementById('cityInput').value;
    //Function to fetch weather data for the city using API
    displayCurrentWeather(city)
    //Update the UI with the weather data
    displayForecast(city)
}

//Function to display current weather
function displayCurrentWeather(city) {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a19999ae3ca37292a4f34a9d91df9f77&units=imperial`;
    let fetchRes = fetch(
        currentUrl)
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
            currentWeather.innerHTML = `   <h2>
            ${d.name} (10/29/2023)
            <img src="https://openweathermap.org/img/wn/10d@2x.png">
        </h2>
        <p>Temp:</p>
        <p>Wind:</p>
        <p>Humidity:</p>`
        })
    //Update the currentWeather with current weather
}

//Function to display 5-day forecast
function displayForecast(city) {
    const apiKey = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a19999ae3ca37292a4f34a9d91df9f77&units=imperial`;
    let fetchRes = fetch(
        apiKey)
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        })
    // Update the forecast with the forecast
}

//Function to update search history
function updateSearchHistory(city) {
    const searchHistory = document.getElementById('searchHistory');
    //Update the searchHistory local storage with new city
}

//Function for when search history is clicked
document.getElementById('searchHistory').addEventListener('click', function (event) {
    if (event.target && event.target.nodeName == 'BUTTON') {
        const city = event.target.textContent;
        searchWeather(city);
    }
});