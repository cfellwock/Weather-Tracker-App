var button = document.querySelector('.button')
var input = document.querySelector('.input')
var city = document.querySelector('.city')
var temperature = document.querySelector('.temperature')
var wind = document.querySelector('.wind')
var humidity = document.querySelector('.humidity')
var uvIndex = document.querySelector('.uvIndex')
var APIKey = '028f804d679d93c8d421b22808ebae86'

button.addEventListener('click', () => { 
    fetch('http://api.openweathermap.org/data/2.5/weather?q=london&appid=028f804d679d93c8d421b22808ebae86')
    .then(response => response.json())
    .then(data => {
        
        console.log(data)

        city.innerHTML = data.name
        temperature.innerHTML = "Temperature: " + data.main.temp
        wind.innerHTML = "Wind: " + data.wind.speed
        humidity.innerHTML = "Humidity: " + data.main.humidity
    
        let lat = data.coord.lat;
        let lon = data.coord.lon;

        fetch("https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1")
        .then(response => response.json())
        .then(function(response) {
            console.log(response[0].value)
            uvIndex.innerHTML = "UV Index: " + response[0].value
        
            let cityID = data.id

            fetch("https://api.openweathermap.org/data/2.5/forecast?id=" + cityID+ "&appid=" + APIKey)
            .then(response => response.json())
            .then(function(response) {
                console.log(response)
            })

        })

    })


});







// "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey
// "



// 'http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=028f804d679d93c8d421b22808ebae86'

// 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=028f804d679d93c8d421b22808ebae86'

// document.getElementsByClassName("city") = nameValue


// questionsDiv.textContent = userQuestion;