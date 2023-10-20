import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="true"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Sacramento</h1>
      <ul>
        <li>Wednesday 21:45</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              alt="Clear Sky"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">68</span>
              <span className="unit">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 15%</li>
            <li>Humidity: 64%</li>
            <li>Wind: 5 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
