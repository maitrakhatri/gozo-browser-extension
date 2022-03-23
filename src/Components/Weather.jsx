import { useEffect, useState } from "react";
import { API_key } from "../apikey";

export function Weather() {

    const [temp, setTemp] = useState("")
    const [location, setLocation] = useState("")
    const [icon, setIcon] = useState("")

    const [lat, setLat] = useState()
    const [lon, setLon] = useState()

    // Getting and Setting Live Latitude and Longitude Coordinates
    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
    })

    // Fetching and Setting Weather data
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`).then((res) => res.json()).then((data) => {

            const {name, main, weather} = data
            setLocation(name);
            setTemp(Math.round((main.temp)-273.15));
            setIcon(weather[0].icon);
        })
    },[lat, lon, location, icon])
        
    return <div class="weather">
        <div class="icon"><img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/></div>
        <div class="temp">{temp}<span>&#176;</span></div>
        <div class="location">{location}</div>
    </div>;
}
