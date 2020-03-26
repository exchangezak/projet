 const weatherIcons = {
     "rain": "wi wi-day-rain",
     "clouds": "wi wi-day-cloudy",
     "clear": "wi wi - day - sunny",
     "snow": "wi wi-day-snow",
     "mist": "wi wi-day-fog",
     "drizzle": "wi wi-day-sleet",
 };

 function capitalize(str) {
     return str[0].touppercase() + str.slice(1);
 }
 async function main(widthIp = true) {
     let ville;
     if (widthIp) {
         const ip = await fetch("https://api.ipify.org?format=json")

         .then(resultat => resultat.json())
             .then(json => json.ip)

         ville = await fetch(
                 "http://api.ipstack.com/" +
                 ip +
                 "?access_key=30c029b1d2a8dcdcdf26ac5a0e07b914"
             )
             .then(resultat => resultat.json())
             .then(json => json.city)
     } else {
         ville = document.querySelector('#ville').textContent;
     }

     const meteo = await fetch(
         "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=8e602b9ea28ed4f9f8fc97a5f6d1105c&lang=fr&units=metric")


     .then(resultat => resultat.json())
         .then(json => json)



 }

 function displayWeatherInfos(data) {
     const name = data.name;
     const temperature = data.main.temp;
     const conditions = data.weather[0].main;
     const description = data.weather[0].description;
     document.querySelector('#ville').textContent = name;
     document.querySelector('#temperature').textContent = Math.round(temperature);
     document.querySelector('#conditions').textContent = capitalize(description);
     document.querySelector('i.wi').className = weatherIcons[conditions];
     document.body.className = conditions.toLowerCase();

 }
 const ville = document.querySelector('#ville');
 ville.addEventListener('click', () => {
     ville.contentEditable = true;
 });
 ville.addEventListener('keydown', (e) => {
     if (e.keycode === 13) {
         e.preventDefault();
         ville.contentEditable = false;
         main(false);
     }
 })