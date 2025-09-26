import React from 'react'
import { useNavigate } from 'react-router-dom';


const ChangeCity = ({ allWeather, setCity, city }) => {
  const navigate = useNavigate();

  function handleCityChange(city) {
    setCity(city);
    navigate('/');
  }

  return (
    <button className='change_city' onClick={() => handleCityChange(city)}>
      <div className='city-info'>
        <div className='city-name'>{city}</div>
        <div className='city-description'>
          {allWeather[city] ? allWeather[city].weather[0].description : '--'}
        </div>
      </div>
      <div className='city-temp-block'>
        <div className='city-temp'>
          {allWeather[city] ? Math.round(allWeather[city].main.temp) + '°' : '--'}
        </div>
        <div className='city-temp-max-min'>
          {allWeather[city] ? 'Макс.: ' + Math.round(allWeather[city].main.temp_max) + ', ' : '--'}
          {allWeather[city] ? 'Мин.: ' + Math.round(allWeather[city].main.temp_min) : '--'}
        </div>
      </div>
    </button>
  )
}

export default ChangeCity