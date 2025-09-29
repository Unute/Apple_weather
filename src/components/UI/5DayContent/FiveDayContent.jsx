import React from 'react'
import cl from './FiveDayContent.module.css'
import Br from '../../Br'
import EveryDay from './EveryDay'


const FiveDayContent = ({min, max, dayWeather}) => {
  // console.log(dayWeather(1)); это == getTomorrowWeather(1) из HomePage

  return (
    <div className={cl.FiveDayContent}>
      <h2 className={cl.Header}>
        <img className={cl.calendar} src="/calendar.svg" alt="календарь" />Прогноз на 10 дней
      </h2>
      <Br />
      <EveryDay id={0} min={min} max={max} weatherDay={dayWeather(0)}>сегодня</EveryDay>
      <Br />
      <EveryDay id={1} min={min} max={max} weatherDay={dayWeather(1)}>завтра</EveryDay>
      <Br />
      <EveryDay id={2} min={min} max={max} weatherDay={dayWeather(2)}>послезавтра</EveryDay>
      <Br />
      <EveryDay id={3} min={min} max={max} weatherDay={dayWeather(3)}>через 4 дня</EveryDay>
      <Br />
      <EveryDay id={4} min={min} max={max} weatherDay={dayWeather(4)}>через 5 дней</EveryDay>
    </div>
  )
}

export default FiveDayContent