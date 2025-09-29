import React from 'react'
import cl from './FiveDayContent.module.css'

const ThremoCapsule = ({ min, max, id, minGlobal, maxGlobal }) => {
  // minGlobal и maxGlobal — минимальная и максимальная температура за 5 дней
  // min[id] и max[id]
  //  — значения для текущего дня

  // Защита от деления на ноль
  const range = maxGlobal - minGlobal || 1;
  // Позиции для закрашенной части
  const left = ((min[id] - minGlobal) / range) * 100;
  const right = ((max[id] - minGlobal) / range) * 100;

  return (
    <div className={cl.thermoCapsule}>
      <div className={cl.thermoLine}>
        <div
          className={cl.thermoFill}
          style={{
            left: `${left}%`,
            width: `${right - left}%`
          }}
        />
      </div>
    </div>
  )
}

export default ThremoCapsule