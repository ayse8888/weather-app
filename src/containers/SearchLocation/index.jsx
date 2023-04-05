import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../../constants/privateKeys';
import ErrorPage from '../ErrorPage';
import Loading from '../Loading';

const SearchLocation = () => {
    const [city, setCity] = useState('Rome');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const url = `${BASE_URL}/weather?q=${location}&appid=${API_KEY}&units=metric`;

    const searchLocation = (event) => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setCity(response.data);
                setLoading(false);
                setError(null);
                console.log(response.data);
            })
            .catch((err) => {
                setError(err);
                console.log('err', err?.response?.data?.message);
            });
        setLocation('');
    };

    if (error) return <ErrorPage errorMessage={error?.response?.data?.message} />;
    if (loading) return <Loading />;

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
