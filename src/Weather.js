import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default function Weather(props) {

  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
  }

  let apiKey = "a466af2425182d19efc750f95387487f";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <Loader
      type="Puff"
      color="#FFC0CB"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}