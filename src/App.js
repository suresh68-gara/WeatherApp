import axios from 'axios'
import React, { useState } from 'react'

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=cb857ad53709e6da7fa4c4f26535a52d`


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }



  return (
    <div className='app'>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>

      <div className='container'>
      <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          {/* <div className="description">

            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div> */}

          <div>
            {data.wind ? <p>Wind speed : {data.wind.speed}</p> : null}
          </div>
          <div>
            {data.main ? <p>sea_level : {data.main.sea_level}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;