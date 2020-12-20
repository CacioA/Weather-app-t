
window.addEventListener('load',()=>{

    let long;
    let lat;
    let weatherStatus;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureHumidity = document.querySelector('.temperature-humidity');
    let temperaturePressure = document.querySelector('.temperature-pressure');
    let currentCountry  = document.querySelector('.country');
    let weatherIcon  = document.querySelector('.weather-icon');
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position => {

            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=eff27d758eaed7bc06dd0fa3a5150edf`;
           
            //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=eff27d758eaed7bc06dd0fa3a5150edf
            //https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=eff27d758eaed7bc06dd0fa3a5150edf
            
            fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            
            console.log(data);
            
            const {temp,humidity, pressure} = data.main;
            weatherStatus = data.weather[0].description;  
            let icon = data.weather[0].icon;
                  
            
            let name = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            let x = document.getElementById('weather-icon');
            
            x.src="http://openweathermap.org/img/wn/04n@2x.png";
            
            
            
            // document.getElementById('weather-icon').src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            temperatureDegree.textContent = (temp-273.15).toFixed(2) ;
            temperatureDescription.textContent = weatherStatus;
            locationTimezone.textContent = "GMT+ "+data.timezone;
            temperatureHumidity.textContent = humidity;
            temperaturePressure.textContent = pressure;
            currentCountry.textContent = data.sys.country;;
            
            //setIcon(weatherStatus,document.querySelector('.icon'));

        });
    
    
    });

    
}


function setIcon(icon,iconID){

    const skycons = new Skycons({"colour":"white"});
    skyc
    const currentIcon = weatherStatus.toUpperCase();
    skycons.play();
    return skycons.set(iconID,Skycons[currentIcon]);
}

});
