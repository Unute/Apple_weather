import React, { useMemo, useRef } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import HeaderWeather from './HeaderWeather';
import Br from './Br';
import TempDayHour from './TempDayHour';
import Wind from './Wind';
import Button from './Button';
import WeatherThisDay from './WeatherThisDay';
import FiveDayContent from './UI/5DayContent/FiveDayContent';
import InfoSecond from './UI/InfoSecond/InfoSecond';
// import 


const HomePage = ({ city, weather, cities, setCity }) => {
  const [weatherHours, setWeatherHours] = useState([]);
  const [fade, setFade] = useState(true);
  const touchStartX = useRef(null);
  const [max, setMax] = useState({})
  const [min, setMin] = useState({})
  const [uvIndex, setUvIndex] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [humidity, setHumidity] = useState(null);

  const apiKey = '618502c1a3bd6bd56665c48117c69c8b';

  useEffect(() => {
    if (!weather?.coord?.lat || !weather?.coord?.lon) return;
    ;
    const fetchUvIndex = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${weather.coord.lat}&lon=${weather.coord.lon}`
        );
        setUvIndex(response.data.value);
        setFeelsLike(Math.round(weather?.main?.feels_like));
        setPressure(weather?.main?.pressure);
        setHumidity(weather?.main?.humidity);
      } catch (e) {
        console.error('Ошибка получения UV:', e);
        setUvIndex(null);
      }
    };
    fetchUvIndex();
  }, [weather]);

  // функция для получения всех данных на определенный день( до 5 дней)
  const getTomorrowWeather = (day) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + day);
    const tomorrowStr = tomorrow.toISOString().slice(0, 10);
    return weatherHours.filter(item => item.dt_txt.startsWith(tomorrowStr));
  };

  useEffect(() => {
    const maxTemps = {};
    const minTemps = {};
    for (let i = 0; i < 5; i++) {
      const dayWeather = getTomorrowWeather(i)
      const temps = dayWeather.map(item => item.main.temp)
      maxTemps[i] = temps.length ? Math.round(Math.max(...temps)) : null;
      minTemps[i] = temps.length ? Math.round(Math.min(...temps)) : null;
    }
    setMax(maxTemps)
    setMin(minTemps)
  }, [weatherHours])

  useEffect(() => {
    fetchWeatherHours();
    setFade(false);
    const timer = setTimeout(() => setFade(true), 300);
    return () => clearTimeout(timer)
  }, [city])

  const fetchWeatherHours = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ru`
    );
    setWeatherHours(response.data.list);
    console.log(response.data.list);
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
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    if (Math.abs(deltaX) > 50) { // порог свайпа
      if (deltaX > 0) {
        handlePrevCity();
      } else {
        handleNextCity();
      }
    }
    touchStartX.current = null;
  }

  return (
    <main
      className={`weather-wrapper ${fade ? 'fade show' : 'fade'}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Button onClick={handlePrevCity} direction="left" />
      <section className="weather">
        <HeaderWeather weather={weather} max={max} min={min} />
        <WeatherThisDay weather={weather} windDirection={windDirection} weatherHours={weatherHours} />

        <FiveDayContent weatherHours={weatherHours} max={max} min={min} dayWeather={getTomorrowWeather} />
        <InfoSecond temp={feelsLike} uf={uvIndex} pressure={pressure} humidity={humidity} />

      </section>
      <Button onClick={handleNextCity} direction="right" />
    </main>
  )
}

export default HomePage