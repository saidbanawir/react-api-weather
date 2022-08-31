import React from "react";
import "./currentweather.css";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weatherContainer">

            <div className="weatherTop">
                <div>
                    <p className="weatherCity">{data.city}</p>
                    <p className="weatherDesc">{data.weather[0].description}</p>
                </div>
                <img className="weatherIcon" alt="" src={`icons/${data.weather[0].icon}.png`} />
            </div>

            <div className="weatherBot">
                <p className="weatherTemp">{Math.round(data.main.temp)}°C</p>
                <div className="weatherDetails">
                    <div className="wParameterRow details">
                        <span className="wParameterLabel">Details</span>
                    </div>
                    <div className="wParameterRow">
                        <span className="wParameterLabel">Feels like</span>
                        <span className="wParameterValue">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="wParameterRow">
                        <span className="wParameterLabel">Wind</span>
                        <span className="wParameterValue">{data.wind.speed}</span>
                    </div>
                    <div className="wParameterRow">
                        <span className="wParameterLabel">Humidity</span>
                        <span className="wParameterValue">{data.main.humidity}%</span>
                    </div>
                    <div className="wParameterRow">
                        <span className="wParameterLabel">Pressure</span>
                        <span className="wParameterValue">{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;