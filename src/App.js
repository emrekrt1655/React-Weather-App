import React, {useState, useEffect} from 'react'
require('dotenv').config();
const api = {
  key: process.env.REACT_APP_API_KEY,
  base: process.env.REACT_APP_BASE_URL
}
console.log(api.key)


const App = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const link = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setSearch("");
      })
    }
  }

  useEffect(() => {
    fetch(`${api.base}weather?q=Bursa&units=metric&APPID=${api.key}`)
    .then(res => res.json())
      .then(result => {
        setWeather(result);
        setSearch("");
      })
  }, [])

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={link}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <>
           <div className="location-box">
           <div className="location" > {weather.name}, {weather.sys.country} </div>
           <div className="date"> {dateBuilder(new Date())} </div>
         </div>
         <div className="weather-box">
           <div className="temp">
            {Math.round(weather.main.temp)}°c
           </div>
           <div className= "weather">
             {weather.weather[0].main}
           </div>
         </div>
         </>
        ) : ('')}
       
      </main>
    </div>
  )
}

export default App;
