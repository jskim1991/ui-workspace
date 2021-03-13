const weather = document.querySelector(".js-weather");

const API_KEY = "db4028e02ba9a08156397c90d9a281d6";
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(response => {
        return response.json();
    }).then(json => {
        console.log(json)
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} degrees Celsius @${place}`
    });
}

function saveCoordinates(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function onSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoordinates(coordsObj);
    getWeather(latitude, longitude);
}

function onError() {
    console.log("Can't access geolocation");
}

function askForCoordinates() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function loadCoordinates() {
    const loadedCoordinates = localStorage.getItem(COORDS);
    if (loadedCoordinates === null) {
        askForCoordinates();
    } else {
        const parsedCoords = JSON.parse(loadedCoordinates);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);

    }
}

function init() {
    loadCoordinates();
}

init();