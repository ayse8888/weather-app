import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';

const SearchLocation = () => {
    const [city, setCity] = useState('');
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8995ccf941ccd1c28cefeb19ccf078d0&units=metric`;

    const searchLocation = (event) => {
        axios.get(url).then((response) => {
            setCity(response.data);
            console.log(response.data);
        });
        setLocation('');
    };

    return (
        <div>
            <Input
                type="text"
                placeholder="Enter City.."
                value={location}
                onChange={(event) => setLocation(event.target.value)}
            />
            <Button onClick={searchLocation} />
            <h1 className="city">{city?.name}</h1>
            <p className="city">Temperature: {city?.main?.temp.toFixed()} °C</p>
            <p className="city">Feels Like: {city?.main?.feels_like.toFixed()} °C</p>
            <p className="city">Humidity: {city?.main?.humidity.toFixed()} %</p>
            <p className="city">Wind Speed: {city?.wind?.speed.toFixed()} km/h</p>
            {city.weather ? <p>Description: {city.weather[0].description}</p> : null}
            {city.weather ? <p>{city.weather[0].main}</p> : null}
            {city.weather && (
                <img
                    src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                    alt=""
                />
            )}
        </div>
    );
};

export default SearchLocation;
