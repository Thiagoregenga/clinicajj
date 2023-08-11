import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom'; // Importando o componente Link do react-router-dom

function LoginSection() {
    return (
        <div className={styles.loginSection}>
            <h2 className={styles.loginSection_h2}>Faça seu Login</h2>
            <h3 className={styles.loginSection_h3}>Preencha seus dados</h3>
            <form className={styles.loginSectionForm} action="URL_DO_SEU_SERVIDOR_PARA_PROCESSAR_O_LOGIN" method="post">
                <label className={styles.loginSectionLabel} htmlFor="email">LOGIN:</label>
                <input className={styles.loginSectionInput} type="email" id="email" name="email" required placeholder="Digite seu login" />

                <label className={styles.loginSectionLabel} htmlFor="password">SENHA:</label>
                <input className={styles.loginSectionInput} type="password" id="password" name="password" required placeholder="Digite sua senha" />
                
                <button className={styles.loginSectionButton} type="submit">Entrar</button>
            </form>
            <p>Não tem uma conta? <Link to="/Cadastro">Cadastre-se aqui</Link></p> 
        </div>
    );
}

export default LoginSection;

