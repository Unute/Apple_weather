import React from 'react'

const Wind = ({weather, windDirection}) => {
  return (
    <div className='wind'>
      <h3>
        Порывы ветра до {weather?.wind?.speed ?? '--'} м/с. Направление ветра: {windDirection ?? '--'}
      </h3>
    </div>
  )
}

export default Wind