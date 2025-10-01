import React from 'react'
import cl from './InfoSecond.module.css'
import ThremoCapsule from '../5DayContent/ThremoCapsule'
import UVThermoCapsule from './UVThermoCapsule'
import CircularIndicator from './CircularIndicator'

const InfoSecond = ({ temp, uf, pressure, humidity }) => {
  // console.log(temp, uf)
  return (
    <div className={cl.container}>
      <div className={`${cl.info_temp} ${cl.block}`}>
        <p className={cl.text}>Ощущается как</p>
        <div className={cl.value}>{temp}°</div>
      </div>

      <div className={`${cl.info_uf} ${cl.block}`}>
        <p className={cl.text}>УФ-индекс</p>
        <div>{uf}</div>
        <UVThermoCapsule uv={uf} />
        <p className={cl.uv_text}>Возможна неточность</p>
      </div>

      <div className={`${cl.info_pressure} ${cl.block}`}>
        <p className={cl.text}>Давление</p>
        <CircularIndicator className={cl.CircularIndicator} value={pressure} min={950} max={1050} color="#3a5ba0" />
      </div>

      <div className={`${cl.info_humidity} ${cl.block}`}>
        <p className={cl.text}>Влажность</p>
        <div className={cl.value}>{humidity}%</div>
      </div>
    </div>
  )
}

export default InfoSecond