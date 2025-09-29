import React from 'react'
import Wind from './Wind'
import TempDayHour from './TempDayHour'
import Br from './Br'

const WeatherThisDay = ({ weather, windDirection, weatherHours }) => {
  return (
    <section className="weatherDay">
      <Wind weather={weather} windDirection={windDirection} />
      <Br />
      <div className='tempDayHours'>
        <TempDayHour weatherHours={weatherHours} id={0} />
        <TempDayHour weatherHours={weatherHours} id={1} />
        <TempDayHour weatherHours={weatherHours} id={2} />
        <TempDayHour weatherHours={weatherHours} id={3} />
        <TempDayHour weatherHours={weatherHours} id={4} />
        <TempDayHour weatherHours={weatherHours} id={5} />
      </div>
    </section>
  )
}

export default WeatherThisDay