import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroText}>
                <h1 className={styles.heroText_h1}>Cuide de você</h1>
                <p className={styles.heroText_p}>Veja mais sobre nossos serviços</p>
                <button className={styles.B1}>Agende Sua consulta</button>
            </div>
        </section>
    );
}

export default Hero;
