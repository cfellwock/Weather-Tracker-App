var button = document.querySelector('.button')
var input = document.querySelector('.input')
var name = document.querySelector('.city')
var temperature = document.querySelector('.temperature')
var wind = document.querySelector('.wind')
var humidity = document.querySelector('.humidity')
var uvIndex = document.querySelector('.uvIndex')


button.addEventListener('click', () => { 
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=028f804d679d93c8d421b22808ebae86')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {
        var nameValue = data['name'];
        document.getElementsByClassName("city") = nameValue

    })

.catch(err => alert("Invalid city name"))
});



// 'http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=028f804d679d93c8d421b22808ebae86'

// 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=028f804d679d93c8d421b22808ebae86'