import React from 'react';
import styles from './Cadastro.module.css';

function RegisterSection() {
    return (
        <div className={styles.registerSection}>
            <h2 className={styles.registerSectionH2}>Cadastre-se</h2>
            <h3 className={styles.registerSectionH3}>Preencha seus dados</h3>
            <form action="URL_DO_SEU_SERVIDOR_PARA_PROCESSAR_O_CADASTRO" method="post" className={styles.registerSectionForm}>
                <label htmlFor="name" className={styles.registerSectionLabel}>NOME COMPLETO:</label>
                <input type="text" id="name" name="name" required placeholder="Digite seu nome completo" className={styles.registerSectionInput} />
                
                <label htmlFor="cpf" className={styles.registerSectionLabel}>CPF:</label>
                <input type="text" id="cpf" name="cpf" required placeholder="Digite seu CPF" className={styles.registerSectionInput} />

                <label htmlFor="phone" className={styles.registerSectionLabel}>TELEFONE:</label>
                <input type="tel" id="phone" name="phone" required placeholder="Digite seu telefone" className={styles.registerSectionInput} />

                <label htmlFor="birthdate" className={styles.registerSectionLabel}>DATA DE NASCIMENTO:</label>
                <input type="date" id="birthdate" name="birthdate" required className={styles.registerSectionInput} />

                <label htmlFor="email" className={styles.registerSectionLabel}>E-MAIL:</label>
                <input type="email" id="email" name="email" required placeholder="Digite seu e-mail" className={styles.registerSectionInput} />

                <label htmlFor="password" className={styles.registerSectionLabel}>SENHA:</label>
                <input type="password" id="password" name="password" required placeholder="Digite uma senha" className={styles.registerSectionInput} />

                <button type="submit" className={styles.registerSectionButton}>CADASTRAR</button>
            </form>
        </div>
    );
}
export default RegisterSection;
