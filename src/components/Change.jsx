import React from 'react'
import ChangeCity from './ChangeCity';
import { Link } from 'react-router-dom';

const Change = ({ setCity, allWeather }) => {

  

  return (
    <div>
      <div className='header_change'>
        <Link to="/">Погода</Link>
      </div>
      <div className='change_main'>
        <ChangeCity allWeather={allWeather} setCity={setCity} city={'Moscow'}/>
        <ChangeCity allWeather={allWeather} setCity={setCity} city={'Minsk'}/>
        <ChangeCity allWeather={allWeather} setCity={setCity} city={'New York'}/>
        <ChangeCity allWeather={allWeather} setCity={setCity} city={'London'}/>
        <ChangeCity allWeather={allWeather} setCity={setCity} city={'Tokyo'}/>
        <ChangeCity allWeather={allWeather} setCity={setCity} city={'Berlin'}/>
        <ChangeCity allWeather={allWeather} setCity={setCity} city={'Paris'}/>
        <ChangeCity allWeather={allWeather} setCity={setCity} city={'Saint Petersburg'}/>


      </div>
    </div>
  )
}

export default Change