import React, { useMemo } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import HeaderWeather from './HeaderWeather';
import Br from './Br';
import TempDayHour from './TempDayHour';
import Wind from './Wind';
import Button from './Button';
// import 


const HomePage = ({ city, weather, cities, setCity }) => {
  const [weatherHours, setWeatherHours] = useState([]);
  const [fade, setFade] = useState(true);

  const apiKey = '618502c1a3bd6bd56665c48117c69c8b';

  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => setFade(true), 300);
    console.log(1);
    return () => clearTimeout(timer)
  }, [city])

  useEffect(() => {
    fetchWeatherHours();
  }, []);

  const fetchWeatherHours = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ru`
    );
    console.log('2');
    console.log(response.data.list);
    setWeatherHours(response.data.list);
  }

  const windDirection = useMemo(() => {
    if (!weather || !weather.wind || weather.wind.deg == null) return null;
    const deg = weather.wind.deg;
    if (deg >= 0 && deg < 22.5) return 'Северный';
    if (deg >= 22.5 && deg < 67.5) return 'Северо-восточный';
    if (deg >= 67.5 && deg < 112.5) return 'Восточный';
    if (deg >= 112.5 && deg < 157.5) return 'Юго-восточный';
    if (deg >= 157.5 && deg < 202.5) return 'Южный';
    if (deg >= 202.5 && deg < 247.5) return 'Юго-западный';
    if (deg >= 247.5 && deg < 292.5) return 'Западный';
    if (deg >= 292.5 && deg < 337.5) return 'Северо-западный';
    if (deg >= 337.5 && deg <= 360) return 'Северный';
    return null;
  }, [weather]);

  function handlePrevCity() {

    const idx = cities.indexOf(city);
    const prevIdx = (idx - 1 + cities.length) % cities.length;
    setCity(cities[prevIdx]);
  }

  function handleNextCity() {
    const idx = cities.indexOf(city);
    const nextIdx = (idx + 1) % cities.length;
    setCity(cities[nextIdx]);
  }

  return (
    <>
      <Button onClick={handlePrevCity} direction="left" />
      <div className={`weather ${fade ? 'fade show' : 'fade'}`}>
        <HeaderWeather weather={weather} />
        <div className='weatherDay'>
          <Wind weather={weather} windDirection={windDirection} />
          <Br />
          <div className='tempDayHours'>
            <TempDayHour weatherHours={weatherHours} id={0} />
            <TempDayHour weatherHours={weatherHours} id={1} />
            <TempDayHour weatherHours={weatherHours} id={2} />
            <TempDayHour weatherHours={weatherHours} id={3} />
            <TempDayHour weatherHours={weatherHours} id={4} />
            <TempDayHour weatherHours={weatherHours} id={5} />
          </div>
        </div>
      </div>
      <Button onClick={handleNextCity} direction="right" />
    </>
  )
}

export default HomePage