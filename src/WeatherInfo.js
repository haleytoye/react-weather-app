import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.weatherData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weatherData.date} />
        </li>
        <li className="text-capitalize">{props.weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img src={props.weatherData.icon} alt={props.weatherData.icon} />

            <span className="temperature">{props.weatherData.temperature}</span>
            <span className="weather-temperature-units"> °C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels Like: {props.weatherData.feels}°</li>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
