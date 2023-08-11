import React from 'react';
import image from '../FOTOS/3mulheres.jpeg';
import styles from './Services.module.css';

function Services() {
    return (
        <div className={styles.terceiraSecao}>
            <h2 className={styles.terceiraSecao_h2}>Serviços</h2>
            <p className={styles.terceiraSecao_p}></p>
            <ul className={styles.l2}>
                <li className={styles.l2_li}>Botox</li>
                <li className={styles.l2_li}>Peeling</li>
                <li className={styles.l2_li}>Preenchimento Facial</li>
                <li className={styles.l2_li}>Preenchimento Labial</li>
            </ul>  
            <img src={image} alt="foto" />       
        </div>
    );
}

export default Services;