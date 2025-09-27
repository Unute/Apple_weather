import React from 'react'
import cl from './Navbar.module.css'
import { Link, Route, Routes } from 'react-router-dom'

const Navbar = ({ cities, city }) => {
  return (
    <div className={cl.Navbar}>
      <div className={cl.container}>
        {/* <div></div> */}
        <div className={cl.list}>
          {cities.map((c) => (
            <div
              key={c}
              className={cl.list_circle + (c === city ? ' ' + cl.active : '')}
            ></div>
          ))}
        </div>

        {/* <Link to="/change"><img src="/src/assets/list.svg" alt="список" /></Link> */}
      </div>
    </div>
  )
}

export default Navbar