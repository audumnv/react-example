import React from 'react';
import axios from 'axios';

export default function Weather(props) {

  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
  }

  let apiKey = "a466af2425182d19efc750f95387487f";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}