import React from 'react'
import cl from './InfoSecond.module.css'
import ThremoCapsule from '../5DayContent/ThremoCapsule'
import UVThermoCapsule from './UVThermoCapsule'

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
        <div className={cl.value}>{uf}</div>
        <UVThermoCapsule uv={uf} />

      </div>
      <div className={`${cl.info_uf} ${cl.block}`}>
        <p className={cl.text}>Давление</p>
        <div className={cl.value}>{pressure}</div>
        <p className={cl.pressure_text}>гПа</p>
      </div>
      <div className={`${cl.info_uf} ${cl.block}`}>
        <p className={cl.text}>Влажность</p>
        <div className={cl.value}>{humidity}%</div>
      </div>
    </div>
  )
}

export default InfoSecond