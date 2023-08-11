import React, { useState } from 'react';
import styles from './Cadastro.module.css';

function RegisterSection() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:8000/register/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    cpf,
                    phone,
                    birthdate,
                    email,
                    password
                })
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                window.location.href = "/Login";
            } else {
                console.error("Registration error:", data.message);
                alert(data.message);  // Display the error message from backend
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    return (
        <div className={styles.registerSection}>
            <h2 className={styles.registerSectionH2}>Cadastre-se</h2>
            <h3 className={styles.registerSectionH3}>Preencha seus dados</h3>
            <form onSubmit={handleRegister} className={styles.registerSectionForm}>
                <label htmlFor="name" className={styles.registerSectionLabel}>NOME COMPLETO:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Digite seu nome completo"
                    className={styles.registerSectionInput}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="cpf" className={styles.registerSectionLabel}>CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    required
                    placeholder="Digite seu CPF"
                    className={styles.registerSectionInput}
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />

                <label htmlFor="phone" className={styles.registerSectionLabel}>TELEFONE:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Digite seu telefone"
                    className={styles.registerSectionInput}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <label htmlFor="birthdate" className={styles.registerSectionLabel}>DATA DE NASCIMENTO:</label>
                <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    required
                    className={styles.registerSectionInput}
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />

                <label htmlFor="email" className={styles.registerSectionLabel}>E-MAIL:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Digite seu e-mail"
                    className={styles.registerSectionInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password" className={styles.registerSectionLabel}>SENHA:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Digite uma senha"
                    className={styles.registerSectionInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className={styles.registerSectionButton}>
                    CADASTRAR
                </button>
            </form>
        </div>
    );
}

export default RegisterSection; 

