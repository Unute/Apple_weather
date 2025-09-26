import React from 'react'

const Button = ({ onClick, direction }) => {
  return (
    <button onClick={onClick} className='arrow-button'>
      <img src="/src/assets/icon_arrow.svg" alt="Стрелка" className={`arrow-${direction}`} />
    </button>
  )
}

export default Button