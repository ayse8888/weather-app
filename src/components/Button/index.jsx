import React from 'react';
import styles from './index.module.css';
import SearchIcon from '../../assets/svg/magnifying-glass-solid.svg';

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.searchButton}>
            <img src={SearchIcon} alt="Search Icon" />
        </button>
    );
};

export default Button;
