const  button = document.getElementById("button_1");
const input = document.getElementById("input_1");
const Name= document.getElementById("cityName");
const time = document.getElementById("City-time");
const temp = document.getElementById("City-Temp");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("Humidity");
const Precip = document.getElementById("precip");
const wind = document.getElementById("Wind_Speed");

button.addEventListener("click" , async () =>{
    const value = input.value;
    const result = await getData(value);
    Name.innerText = `${result.location.name} ,  ${result.location.region} - ${result.location.country}`;
    time.innerText = result.location.localtime;
    temp.innerText = result.current.temp_c;
    pressure.innerText = result.current.pressure_mb;
    humidity.innerText = result.location.current.humidity;
    Precip.innerText = result.current.precip_in;
    wind.innerText = result.current.wind_kph;


});
async function getData(CityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=ef3e6f58fb5a4413a2f80536241908&q=${CityName}&aqi=yes` 
    )
    return await promise.json()
} 
