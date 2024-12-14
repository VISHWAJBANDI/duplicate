// document.addEventListener("DOMContentLoaded", () => {
  const checkWeather = async (name) => {
    const apiKey = "f790733c662152f50e75a4d3cafa133e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;

    
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)

      if (!data.name) {
        alert("Please enter a valid city name");
        return;
      }

    let country=  document.querySelector("#country").innerHTML = `<h1 style="color:blue">City:${data.name}</h1>`;

    let temp=  document.querySelector("#temperature").innerHTML = `Temperature: ${data.main.temp}°C`;
    let des=  document.querySelector("#des").innerHTML = `Description: ${data.weather[0].description}`;
    let humi=  document.querySelector("#humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
    let wind=document.querySelector("#windspeed").innerHTML = `Wind Speed: ${data.wind.speed} km/h`;

      const img = document.querySelector("img");
      if (data.weather[0].main === "Clouds") {
        img.src = "./images/scatterred.png";
      } else if (data.weather[0].main === "Clear") {
        img.src = "./images/clear.png";
      } else if (data.weather[0].main === "Snow") {
        img.src = "./images/snow.png";
      } else if (data.weather[0].main === "Rain") {
        img.src = "./images/rain.png";
      } else if (data.weather[0].main === "Mist") {
        img.src = "./images/mist.png";
      } else if (data.weather[0].main === "Wind") {
        img.src = "./images/wind.png";
      }else if (data.weather[0].main === "Drizzle") {
        img.src = "./images/drizzle.png";
};

  document.querySelector("button").addEventListener("click", () => {
    const location = document.querySelector("input").value;
    checkWeather(location);
  });

  document.querySelector("input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const location = e.target.value;
      checkWeather(location);
    }
  });
  }
  checkWeather("hyderabad");
  
