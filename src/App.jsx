import React from 'react'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes'
import Navbar from './components/UI/Navbar/Navbar'
import FloatingClouds from './components/ThreeJS/FloatingClouds'
import SunModel from './components/ThreeJS/SunModel'

const cities = ['Moscow', 'Minsk', 'New York', 'London', 'Tokyo', 'Berlin', 'Paris', 'Saint Petersburg', 'Stavropol'];

function App() {
    const [city, setCity] = useState('Moscow');

  return (
    <div className="App">
      {/* <SunModel /> */}
      <FloatingClouds />
      <BrowserRouter>
        <AppRoutes  cities={cities} setCity={setCity} city={city} />
        <Navbar cities={cities} city={city} setCity={setCity} />
      </BrowserRouter>
    </div>
  )
}

export default App
