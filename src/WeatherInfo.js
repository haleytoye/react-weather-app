import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-7">
          <div className="d-flex">
            <img src={props.data.icon} alt={props.data.icon} />
            <div className="float-left">
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Feels Like: {props.data.feels}°</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
