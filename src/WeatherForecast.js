import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(props);
  }

  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiKey = "1o0f4aea9af54436031a3t4f3b2ca21f";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">Thu</div>
          <div>
            <img src={props.icon} alt="forecast-icon"></img>
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
