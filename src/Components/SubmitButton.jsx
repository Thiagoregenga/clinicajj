import React from 'react';
import styles from './SubmitButton.module.css';

function SubmitButton({ onSubmit }) {
    return (
        <button className={styles.button} onClick={onSubmit}>Book Appointment</button>
    );
}

export default SubmitButton;
