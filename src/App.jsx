import React from 'react'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRotes from './components/AppRoutes'
import Navbar from './components/UI/Navbar/Navbar'

const cities = ['Moscow', 'Minsk', 'New York', 'London', 'Tokyo', 'Berlin', 'Paris', 'Saint Petersburg', 'Stavropol', 'Essentuki'];

function App() {
    const [city, setCity] = useState('Moscow');

  return (
    <div className="App">

      <BrowserRouter>
        <AppRotes  cities={cities} setCity={setCity} city={city} />
        <Navbar cities={cities} city={city}/>
      </BrowserRouter>
    </div>
  )
}

export default App
