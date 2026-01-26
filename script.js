let countryCode = 356;
let API_key = "7dbb2a18fb9855d1804d6fe0c74fd651";
let button = document.querySelector("button");
button.addEventListener("click", async function () {
  let input = document.querySelector("#cityName");
  let cityName = input.value.trim();
  if(!cityName){
    alert("Please enter a valid city name!");
    return;
  }
  let getCoordUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},IN&appid=${API_key}`;
  let response = await (await fetch(getCoordUrl)).json();
  let lat=response[0].lat;
  let lon=response[0].lon;
  let getWeatherUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
  response = await (await fetch(getWeatherUrl)).json();
  console.log(response);
  let p=document.createElement("p");
  p.innerText=`City Name: ${response.name}\nTemperature: ${response.main.temp-273.15}°C\nMinimum Temperature: ${response.main.temp_min-273.15}°C\nMaximum Temperature: ${response.main.temp_max-273.15}°C\nHumidity: ${response.main.humidity}%\nPressure: ${response.main.pressure}hPa\nWind Speed: ${response.wind.speed}m/s\nDescription: ${response.weather[0].description}`;
  p.classList.add("weather-details");
  document.body.appendChild(p);
});
