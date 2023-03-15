import React from "react";

export default function WeatherForecastDay(props) {
  let icon = props.data.condition.icon_url;
  function maxTemp() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}° `;
  }
  function minTemp() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Weatherprops.data-day">{day()}</div>
      <div>
        <img src={icon} alt="forecast-icon"></img>
      </div>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemp()} </span>
        <span className="WeatherForecast-temp-min">{minTemp()} </span>
      </div>
    </div>
  );
}
