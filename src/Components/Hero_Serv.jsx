import React from 'react';
import styles from './Hero.module2.css';

function Hero2() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroText}>
                <h1 className={styles.heroText_h1}>Sobre Nós</h1>
                <p className={styles.heroText_p}>Um novo conceito de clínica estética</p>
            </div>
        </section>
    );
}

export default Hero2;