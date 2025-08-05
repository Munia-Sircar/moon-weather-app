function searchCity(event) {
  event.preventDefault();

  function displayCity(response) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = response.data.city;

    let temp = document.querySelector("#temp-now");
    let tempNow = Math.round(response.data.temperature.current);
    temp.innerHTML = tempNow;

    let humidity = document.querySelector("#humidity");
    let humidityNow = Math.round(response.data.temperature.humidity);
    humidity.innerHTML = humidityNow;

    let wind = document.querySelector("#windspeed");
    let windNow = Math.round(response.data.wind.speed);
    wind.innerHTML = windNow;

    let description = document.querySelector("#current-description");
    let descriptionNow = response.data.condition.description;
    description.innerHTML = descriptionNow;

    let icon = document.querySelector("#icon");
    let iconNow = response.data.condition.icon_url;
    icon.innerHTML = `<img
                src="${iconNow}"
                alt=""
                class="current-icon" />`;
  }

  let apiCity = document.querySelector("#search-input");
  let apiKey = "28d0bff0ffaa52b09e33da6etode543b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${apiCity.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayCity);

  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = `${day} ${hours}:${minutes}`;
}

let enterCity = document.querySelector("#search-function");
enterCity.addEventListener("submit", searchCity);
