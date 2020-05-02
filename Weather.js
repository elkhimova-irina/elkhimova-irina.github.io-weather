

function WeatherNow(p)
{
    const temperature = Math.round(p.main.temp);
    document.getElementById("Town").innerHTML = p.name;
    document.getElementById("temperature").innerHTML = (temperature >= 0 ? "+" + temperature : temperature) + "°";
    document.getElementById("condition").innerHTML = p.weather[0].description[0].toUpperCase() + p.weather[0].description.slice(1);
   document.getElementById("wind").innerHTML = Math.round(p.wind.speed) + "м/с";
    document.getElementById("humidity").innerHTML = p.main.humidity + "%";
    document.getElementById("pressure").innerHTML = Math.round(p.main.pressure*0.75) + "мм рт. ст.";
}

function Forecast()
{
    const city = City.value === "" ? "Москва" : encodeURIComponent(City.value);
    const api_key = "d79fd93c9e3a0f0ffe6d92002fc3524";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=ru&units=metric&appid=" + api_key;

    const CurrentData = fetch(url).then(response => response.json());

    CurrentData
        .then(
            result => {
                if (result.cod === "404")
                    alert("Такого города нет. Ты проиграл!")
                else
                    WeatherNow(result);
            },
            error => alert(error)
        );
    
}