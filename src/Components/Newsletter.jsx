import React from 'react';
import styles from './Newsletter.module.css';

function Newsletter() {
    return (
        <div className={styles.quartaSecao}>
            <h2 className={styles.quartaSecao_h2}>Assine nossa Newsletter para as melhores promoções!</h2>
            <p className={styles.quartaSecao_p}>Assine para receber em primeira mão os descontos em nosso site</p>
            <form>
                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required className={styles.quartaSecao_input} />
                <button type="submit" className={styles.quartaSecao_button}>Enviar</button>
            </form>
        </div>
    );
}

export default Newsletter;
