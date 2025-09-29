import React from 'react'



const HeaderWeather = ({weather, max, min}) => {
  return (
    <div>
      {weather ? (
        <>
          <h1 className='weather_name'>{weather.name}</h1>
          <h1 className='weather_temp'>{Math.round(weather.main.temp)}°</h1>
          <h2 className='weather_description description'>{weather.weather[0].description}</h2>
          <h2 className='weather_description'>
            Мин.:{min[0]}°, макс.:{max[0]}°
          </h2>
        </>
      ) : (
        <p>--</p>
      )}
    </div>
  )
}

export default HeaderWeather