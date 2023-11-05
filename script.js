const searchBtn = document.getElementById('searchBtn');
const currentWeather = document.getElementById('currentWeather');
const cityList = JSON.parse(localStorage.getItem("cityList"))||[];
const searchHistory = document.getElementById("searchHistory");
window.addEventListener('DOMContentLoaded', (event) => {
    const defaultCity = "Ogden";
    displayCurrentWeather(defaultCity);
});

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
    let fetchRes = fetch(currentUrl);
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d);
            if (cityList.includes(d.name) === false){
                cityList.push(d.name)
                displayCities()
                localStorage.setItem("cityList",JSON.stringify(cityList))
            }
            currentWeather.innerHTML = `   <h2>
            ${d.name} (${dayjs.unix(d.dt).format("MM/DD/YYYY")})
            <img src="https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png">
        </h2>
        <p>Temp: ${d.main.temp} °F</p>
        <p>Wind: ${d.wind.speed} mph</p>
        <p>Humidity: ${d.main.humidity}%</p>`
        });
    //Update the currentWeather with current weather
}

//Function to display 5-day forecast
function displayForecast(city) {
    const apiKey = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a19999ae3ca37292a4f34a9d91df9f77&units=imperial`;
    let fetchRes = fetch(
        apiKey)
    fetchRes.then(res =>
        res.json()).then(d => {
            selector.innerHTML=""
            for (let i = 4; i < 40; i=i+8) {
                console.log(d.list[i])
                selector.innerHTML+=` <div class="col-sm-2">
                <div class="card">
                  <h5>${dayjs.unix(d.list[i].dt).format("MM/DD/YYYY")}</h5>
                  <img src="https://openweathermap.org/img/wn/${d.list[i].weather[0].icon}@2x.png" class="w-50" alt="...">
                  <div class="card-body">
                    <p class="card-text">Temp: ${d.list[i].main.temp}</p>
                    <p>Wind: ${d.list[i].wind.speed}</p>
                    <p>Humidity: ${d.list[i].main.humidity}</p>
                  </div>
                </div>`
            }
        })
    // Update the forecast with the forecast
    var selector = document.getElementById("selector");
}
function displayCities(){
searchHistory.innerHTML = ""
for (let i = 0; i < cityList.length; i++) {
    searchHistory.innerHTML+= `<br><button class="w-50">${cityList[i]}</button>`
}
}
displayCities()
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