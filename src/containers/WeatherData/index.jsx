import React from 'react';
import styles from './index.module.css';
import Humidity from '../../assets/svg/droplet-solid.svg';
import Wind from '../../assets/svg/wind-solid.svg';
import Temperature from '../../assets/svg/temperature-high-solid.svg';

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
            <div className={styles.weatherIconContainer}>
                <h2>{main || '-'}</h2>
                <img src={weatherIcon} alt="" />
            </div>
            <h1>{temperature || '-'}°C</h1>
            <div className={styles.weatherInfoContainer}>
                <div className={styles.humidityContainer}>
                    <p>
                        <img src={Humidity} alt="Search Icon" />
                    </p>
                    <p>{humidity || '-'} %</p>
                </div>
                <div className={styles.windSpeedContainer}>
                    <p>
                        <img src={Wind} alt="Search Icon" />
                    </p>
                    <p>{windSpeed || '-'} km/h</p>
                </div>
                <div className={styles.feelsLikeContainer}>
                    <p>
                        <img src={Temperature} alt="Search Icon" />
                    </p>
                    <p>Feels Like {feelsLike || '-'}°C</p>
                </div>
            </div>
            {/* <p>Description: {description || '-'}</p> */}
        </div>
    );
};

export default WeatherData;
