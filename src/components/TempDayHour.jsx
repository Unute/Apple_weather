import React, { Children } from 'react'

const TempDayHour = ({ weatherHours, id }) => {

  function getCurrentHour(value, id) {
    if (id === 0) return 'Сейчас';
    if (value.length > 0) {
      return value[id]?.dt_txt?.split(' ')[1]?.split(':')[0];
    }
  }
  function getTempHour(value, id) {
    if (value.length > 0) {
      return Math.round(value[id]?.main?.temp);
    }
  }
  function getIconUrl(value, id) {
    if (value.length > 0 && value[id]?.weather?.[0]?.icon) {
      return `https://openweathermap.org/img/wn/${value[id].weather[0].icon}@2x.png`;
    }
  }

  return (
    <div className='tempDayHour'>
      <div className='time'>{getCurrentHour(weatherHours, id)}</div>
      <div className='icon-hour'>
        {getIconUrl(weatherHours, id) && (
          <img src={getIconUrl(weatherHours, id)} alt="icon" width={48} height={48} />
        )}
      </div>
      <div className='temp-hour'>{getTempHour(weatherHours, id)}°</div>
    </div>
  )
}

export default TempDayHour