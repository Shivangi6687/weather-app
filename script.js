async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "5f9301280e3f3b90b138cec8451d5267";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const temp = data.main.temp;
      const temp_min = data.main.temp_min;
      const temp_max = data.main.temp_max;
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      const country = data.sys.country;
      const cityName = data.name;

      // Display temperature, min/max and location
      document.getElementById("temperature").innerText = `${cityName}, ${country} - ${temp}°C (Min: ${temp_min}°C, Max: ${temp_max}°C)`;
      document.getElementById("description").innerText = `Weather: ${description}`;

      // Display weather icon
      document.getElementById("weatherIcon").src = iconUrl;
      document.getElementById("weatherIcon").style.display = "inline";

    } else {
      document.getElementById("temperature").innerText = "City not found!";
      document.getElementById("description").innerText = "";
      document.getElementById("weatherIcon").style.display = "none";
    }
  } catch (error) {
    document.getElementById("temperature").innerText = "Error getting data!";
    document.getElementById("description").innerText = "";
    document.getElementById("weatherIcon").style.display = "none";
  }
}
