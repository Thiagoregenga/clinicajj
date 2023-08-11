import React from 'react';
import styles from './Select.module.css';

function ServiceSelector({ onChange }) {
    return (
        <select className={styles.select} onChange={e => onChange('service', e.target.value)}>
            <option value="">Select Service</option>
            <option value="Haircut">Haircut</option>
            <option value="Facial">Facial</option>
            <option value="Manicure">Manicure</option>
        </select>
    );
}

export default ServiceSelector;

