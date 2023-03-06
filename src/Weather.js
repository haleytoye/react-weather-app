import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city.."
          className="from-control"
        />
        <input type="submit" value="search" className="btn-search" />
      </form>
      <h1>Toronto</h1>
      <ul>
        <li>Wednesday 7:15</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://weather.gc.ca/weathericons/small/00.png"
            alt="can-sun"
          />
          6°C
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
