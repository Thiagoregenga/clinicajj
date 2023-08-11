import React from 'react';
import styles from './Select.module.css';

function TimeSelector({ onChange }) {
    return (
        <select className={styles.select} onChange={e => onChange('time', e.target.value)}>
            <option value="">Select Time</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
        </select>
    );
}

export default TimeSelector;
