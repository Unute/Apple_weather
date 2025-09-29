import React from 'react'
import cl from './FiveDayContent.module.css'
import Br from '../../Br'
import EveryDay from './EveryDay'


const FiveDayContent = ({ min, max, dayWeather }) => {
  // console.log(dayWeather(1)); это == getTomorrowWeather(1) из HomePage

  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  function getWeekDay(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return daysOfWeek[date.getDay()];
  }

  return (
    <div className={cl.FiveDayContent}>
      <h2 className={cl.Header}>
        <img className={cl.calendar} src="/calendar.svg" alt="календарь" />Прогноз на 10 дней
      </h2>
      <Br />
      <EveryDay id={0} min={min} max={max} weatherDay={dayWeather(0)}>сегодня</EveryDay>
      <Br />
      <EveryDay id={1} min={min} max={max} weatherDay={dayWeather(1)}>{getWeekDay(1)}</EveryDay>
      <Br />
      <EveryDay id={2} min={min} max={max} weatherDay={dayWeather(2)}>{getWeekDay(2)}</EveryDay>
      <Br />
      <EveryDay id={3} min={min} max={max} weatherDay={dayWeather(3)}>{getWeekDay(3)}</EveryDay>
      <Br />
      <EveryDay id={4} min={min} max={max} weatherDay={dayWeather(4)}>{getWeekDay(4)}</EveryDay>
    </div>
  )
}

export default FiveDayContent