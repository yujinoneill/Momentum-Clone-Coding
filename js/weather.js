navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = config.apiKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url).then(response => response.json()).then(response => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerHTML = `${response.weather[0].main} ${Math.floor(response.main.temp)}&#176;`;
        city.innerHTML = response.name;
    })
}

function error() {
    alert("We cannot find you! If you wanna know your weather status, please allow us!")
}