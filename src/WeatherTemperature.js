import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFar(event) {
    event.preventDefault();
    setUnit("fahereit");
  }

  function showCel(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function farenheitTemp() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celcius}</span>
        <span className="weather-temperature-units">
          °C |{" "}
          <a href="/" onClick={showFar}>
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
          <a href="/" onClick={showCel}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
