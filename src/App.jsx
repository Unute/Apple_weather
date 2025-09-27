import React from 'react'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes'
import Navbar from './components/UI/Navbar/Navbar'

const cities = ['Moscow', 'Minsk', 'New York', 'London', 'Tokyo', 'Berlin', 'Paris', 'Saint Petersburg', 'Stavropol'];

function App() {
    const [city, setCity] = useState('Moscow');

  return (
    <div className="App">

      <BrowserRouter>
        <AppRoutes  cities={cities} setCity={setCity} city={city} />
        <Navbar cities={cities} city={city} setCity={setCity} />
      </BrowserRouter>
    </div>
  )
}

export default App
