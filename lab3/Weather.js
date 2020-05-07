


function WeatherNow(p)
{
    console.log(p);
    let temperature = p.main.temp;
    document.getElementById("temperature").innerHTML = (temperature >= 0 ? "+" + temperature : temperature) + "°";
    document.getElementById("condition").innerHTML = p.weather[0].description[0].toUpperCase() + p.weather[0].description.slice(1);
    document.getElementById("wind").innerHTML = Math.round(p.wind.speed) + "м/с";
    document.getElementById("humidity").innerHTML = p.main.humidity + "%";
    document.getElementById("pressure").innerHTML = Math.round(p.main.pressure*0.75) + "мм рт. ст.";
}

function Forecast()
{
    let city = document.getElementById("City");

    
    let api_key = "7d79fd93c9e3a0f0ffe6d92002fc3524";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&lang=ru&units=metric&appid=" + api_key;
    let CurrentData = fetch(url).then(response => response.json());
    console.log(CurrentData);
    CurrentData
        .then(
            result => {
                if (result.cod === "404")
                    alert("Ничего не найдено. Хорошая попытка, попробуйте снова :)")
                else
                    WeatherNow(result);
            },
            error => alert(error)
        );

}
