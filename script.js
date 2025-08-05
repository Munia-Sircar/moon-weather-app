function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;
}

let enterCity = document.querySelector(".search-function");
enterCity.addEventListener("submit", searchCity);
