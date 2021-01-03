import React from 'react'
const api = {
  key: "d0abb125c9a030c9aac4a7db57fec36c",
  base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
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
      </main>
    </div>
  )
}

export default App
