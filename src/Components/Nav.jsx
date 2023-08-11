import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../FOTOS/Logo.jpeg';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoo}>
                {/* Envolve a imagem da logo com o componente Link */}
                <Link to="/">
                    <img src={logo} alt="Logo da Empresa" className={styles.logoo_img} />
                </Link>
            </div>
            <div className={styles.navItems}>
                <Link to="/login" className={styles.navItems_a}>Agendamentos</Link>
                <Link to="/servico" className={styles.navItems_a}>Serviços</Link>
                <Link to="/sobre-nos" className={styles.navItems_a}>Sobre Nós</Link>
            </div>  
        </nav>
    );
}

export default NavBar;
