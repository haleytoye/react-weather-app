import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">Thu</div>
          <div>
            <img src={props.data.icon} alt="forecast-icon"></img>
          </div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19° </span>
            <span className="WeatherForecast-temp-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
