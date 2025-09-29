import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Change from './Change';
import axios from 'axios';

const AppRoutes = ({city, cities, setCity}) => {
  const [weather, setWeather] = useState(null);
  const [allWeather, setAllWeather] = useState({ Moscow: null, Minsk: null });
  

  const apiKey = '618502c1a3bd6bd56665c48117c69c8b';

  useEffect(() => {
    async function fetchWeather() {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`
      );
      setWeather(response.data);
      console.log(response.data);
    }
    fetchWeather();
  }, [city]);

  useEffect(() => {
    async function fetchAllWeather() {
      const results = {};
      for (const c of cities) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${apiKey}&units=metric&lang=ru`
        );
        results[c] = response.data;
      }
      setAllWeather(results);
    }
    fetchAllWeather();
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <HomePage
          city={city}
          weather={weather}
          setCity={setCity}
          cities={cities}
        />}
      />
      <Route path="/change" element={<Change setCity={setCity} allWeather={allWeather} />} />
    </Routes>
  );
};

export default AppRoutes;