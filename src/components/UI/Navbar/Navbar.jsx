import React from 'react'
import cl from './Navbar.module.css'
import { Link, Route, Routes } from 'react-router-dom'

const Navbar = ({ cities, city, setCity }) => {
  return (
    <div className={cl.Navbar}>
      <div className={cl.container}>
        <div className={cl.list}>
          {cities.map((c) => (
            <button
              onClick={() => {
                setCity(c);
              }}
              key={c}
              className={cl.list_circle + (c === city ? ' ' + cl.active : '')}
            ></button>
          ))}
        </div>
      </div>
      <Link className={cl.link} to="/change"><img src="/list.svg" alt="список" /></Link>
    </div>
  )
}

export default Navbar