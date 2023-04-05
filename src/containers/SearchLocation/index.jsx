import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../../constants/privateKeys';
import ErrorPage from '../ErrorPage';
import Loading from '../Loading';
import WeatherData from '../WeatherData';
import styles from './index.module.css';

const SearchLocation = () => {
    const [city, setCity] = useState('');
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
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <Input
                    type="text"
                    placeholder="Enter City.."
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
                <Button onClick={searchLocation} />
            </div>
            {city && (
                <WeatherData
                    name={city.name}
                    temperature={city.main.temp.toFixed()}
                    feelsLike={city.main.feels_like.toFixed()}
                    humidity={city.main.humidity.toFixed()}
                    windSpeed={city.wind.speed.toFixed()}
                    description={city.weather[0].description}
                    main={city.weather[0].main}
                    weatherIcon={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                />
            )}
        </div>
    );
};

export default SearchLocation;
