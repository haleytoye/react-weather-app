import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "1o0f4aea9af54436031a3t4f3b2ca21f";
  let city = "Lisbon";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  let units = "metric";
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city.."
              className="from-control w-100"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className=" btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Toronto</h1>
      <ul>
        <li>Wednesday 7:15</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://weather.gc.ca/weathericons/small/00.png"
              alt="can-sun"
            />

            <span className="temperature">6</span>
            <span className="weather-temperature-units"> °C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: %</li>
            <li>Humidity: %</li>
            <li>Wind: km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
