import React from 'react'
import cl from './FiveDayContent.module.css'
import Br from '../../Br'


const FiveDayContent = ({ weatherHours }) => {

  return (
    <div className={cl.FiveDayContent}>
      <h2 className={cl.Header}>
        <img className={cl.calendar} src="/calendar.svg" alt="календарь" />Прогноз на 10 дней
      </h2>

      <Br />

      <div className={cl.Content}>
        <p className={cl.dayWeek}>сегодня</p>
        <div className={cl.icon}><img src="/weather.svg" alt="погода" /></div>

        <div className={cl.temp}>
          <div className={cl.temp_day}>Макс.: {}°</div>
          <Br />
          <div className={cl.temp_night}>Мин.: {}°</div>
        </div>

      </div>
    </div>
  )
}

export default FiveDayContent