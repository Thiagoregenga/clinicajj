import React from 'react';
import styles from './Select.module.css';

function ProfessionalSelector({ onChange }) {
    return (
        <select className={styles.select} onChange={e => onChange('professional', e.target.value)}>
            <option value="">Select Professional</option>
            <option value="John">John</option>
            <option value="Mary">Mary</option>
            <option value="Emma">Emma</option>
        </select>
    );
}

export default ProfessionalSelector;
