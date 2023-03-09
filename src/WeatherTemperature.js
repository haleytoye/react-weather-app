import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  function updateTemp(event) {
    event.preventDefault();
    props.onChange();
  }

  function farenheitTemp() {
    return (props.temperature * 9) / 5 + 32;
  }

  if (props.unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.temperature}</span>
        <span className="weather-temperature-units">
          °C |{" "}
          <a href="/" onClick={updateTemp}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheitTemp())}</span>
        <span className="weather-temperature-units">
          <a href="/" onClick={updateTemp}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
