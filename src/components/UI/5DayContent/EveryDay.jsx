import React from 'react'
import cl from './FiveDayContent.module.css'
import Br from '../../Br'
import ThremoCapsule from './ThremoCapsule';

const EveryDay = ({ max, min, id, children, weatherDay }) => {
  // Вычисляем глобальные min/max для диапазона
  const minGlobal = Math.min(...Object.values(min).filter(v => typeof v === 'number'));
  const maxGlobal = Math.max(...Object.values(max).filter(v => typeof v === 'number'));

  const iconUrl = weatherDay && weatherDay[0] && weatherDay[0].weather && weatherDay[0].weather[0]
    ? `https://openweathermap.org/img/wn/${weatherDay[0].weather[0].icon}@2x.png`
    : '/weather.svg';

  return (
    <div className={cl.Content}>
      <p className={cl.dayWeek}>{children}</p>
      <div className={cl.temp}>
        <div className={cl.icon}><img className={cl.icon_img} src={iconUrl} alt="погода" /></div>
        <div className={cl.temp_night}>{min[id]}°</div>
        <ThremoCapsule min={min} max={max} id={id} minGlobal={minGlobal} maxGlobal={maxGlobal} />
        <div className={cl.temp_day}>{max[id]}°</div>
      </div>
    </div>
  )
}

export default EveryDay