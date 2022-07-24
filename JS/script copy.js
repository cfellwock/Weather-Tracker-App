const APIKey = "028f804d679d93c8d421b22808ebae86"
let city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)