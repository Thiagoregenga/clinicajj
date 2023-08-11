import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../FOTOS/Logo.jpeg';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <div>
                    <img src={logo} alt="logo" className={styles.logo2_img} />
                </div>
            </div>
            <div className={styles.footerSection}>
                <h3>Menu</h3>
                <ul className={styles.footer_ul}>
                    <li className={styles.footer_li}><Link to="/" className={styles.footer_a}>Página inicial</Link></li>
                    <li className={styles.footer_li}><Link to="/sobre-nos" className={styles.footer_a}>Sobre nós</Link></li>
                    <li className={styles.footer_li}><Link to="/agende-sua-consulta" className={styles.footer_a}>Agende sua consulta</Link></li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h3>Redes Sociais</h3>
                <ul className={styles.footer_ul}>
                    <li className={styles.footer_li}><Link to="/facebook" className={styles.footer_a}>Facebook</Link></li>
                    <li className={styles.footer_li}><Link to="/instagram" className={styles.footer_a}>Instagram</Link></li>
                    <li className={styles.footer_li}><Link to="/twitter" className={styles.footer_a}>Twitter</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
