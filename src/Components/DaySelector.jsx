import React from 'react';
import styles from './Select.module.css';

function DaySelector({ onChange }) {
    return (
        <select className={styles.select} onChange={e => onChange('day', e.target.value)}>
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
        </select>
    );
}

export default DaySelector;

