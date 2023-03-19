import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import FeelsLike from "./FeelsLike";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("celcius");

  return (
    <div className="WeatherInfo mb-3">
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
              <WeatherTemperature
                unit={unit}
                temperature={props.data.temperature}
                onChange={() => {
                  if (unit === "celcius") {
                    setUnit("farenheit");
                  } else {
                    setUnit("celcius");
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-5 right">
          <FeelsLike
            unit={unit}
            temperature={props.data.feels}
            humidity={props.data.humidity}
            wind={props.data.wind}
          />
        </div>
      </div>
    </div>
  );
}
