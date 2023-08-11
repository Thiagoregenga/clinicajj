import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function LoginSection() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:8000/login/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log(data.message);
                window.location.href = "";  // Redirect to YouTube
            } else {
                console.error("Erro no login:", data.message);
                alert(data.message);  // Display the error message from backend
            }
        } catch (error) {
            console.error("Erro na comunicação:", error);
        }
    };
    return (
        <div className={styles.loginSection}>
            <h2 className={styles.loginSection_h2}>Faça seu Login</h2>
            <h3 className={styles.loginSection_h3}>Preencha seus dados</h3>
            <form className={styles.loginSectionForm} onSubmit={handleSubmit}>
                <label className={styles.loginSectionLabel} htmlFor="email">LOGIN:</label>
                <input 
                    className={styles.loginSectionInput} 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="Digite seu login" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className={styles.loginSectionLabel} htmlFor="password">SENHA:</label>
                <input 
                    className={styles.loginSectionInput} 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    placeholder="Digite sua senha" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <button className={styles.loginSectionButton} type="submit">Entrar</button>
            </form>
            <p>Não tem uma conta? <Link to="/Cadastro">Cadastre-se aqui</Link></p> 
        </div>
    );
}

export default LoginSection;
