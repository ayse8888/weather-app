import React from 'react';
import styles from './index.module.css';

const Input = ({ onChange, value, type, placeholder }) => {
    return (
        <input
            className={styles.input}
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    );
};

export default Input;
