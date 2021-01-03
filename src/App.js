import React from 'react'
const api = {
  key: "d0abb125c9a030c9aac4a7db57fec36c",
  base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
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
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
          />
        </div>
        <div className="location-box">
          <div className="location" > New York City, Us</div>
          <div className="date"> {dateBuilder(new Date())} </div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15°c
          </div>
          <div className= "weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
