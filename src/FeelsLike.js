import React from "react";

export default function FeelsLike(props) {
  function feelsTemp() {
    if (props.unit === "farenheit") {
      return (props.temperature * 9) / 5 + 32;
    } else {
      return props.temperature;
    }
  }

  return (
    <ul>
      <li>Feels Like: {Math.round(feelsTemp())}°</li>
      <li>Humidity: {props.humidity}%</li>
      <li>Wind: {props.wind} km/h</li>
    </ul>
  );
}
