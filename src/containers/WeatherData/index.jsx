import React from 'react';

const WeatherData = ({
    name,
    temperature,
    feelsLike,
    humidity,
    windSpeed,
    description,
    main,
    weatherIcon,
}) => {
    return (
        <div>
            <h1>{name || '-'}</h1>
            <p>Temperature: {temperature || '-'} °C</p>
            <p>Feels Like: {feelsLike || '-'} °C</p>
            <p>Humidity: {humidity || '-'} %</p>
            <p>Wind Speed: {windSpeed || '-'} km/h</p>
            <p>Description: {description || '-'}</p>
            <p>Main: {main || '-'}</p>
            <img src={weatherIcon} alt="" />
        </div>
    );
};

export default WeatherData;
