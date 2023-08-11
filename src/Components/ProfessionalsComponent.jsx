import React from 'react';
import styles from './ProfessionalsComponent.module.css';
import mulherImage1 from '../FOTOS/foto1.png';  // Importando a imagem
import mulherImage2 from '../FOTOS/foto2.png';

function ProfessionalsComponent() {
    return (
        <section className={styles.professionals}>
            <h2 className={styles.professionals_h2}>Nossos Profissionais</h2>
            <div className={styles.professionals_card}>
                <img src={mulherImage1} alt="Nome Profissional 1" className={styles.professionals_image} />
                <div className={styles.professionals_description}>
                    <p>Dra. Helena Soares

Graduada em Medicina pela Universidade de São Paulo (USP) e especializada em Dermatologia pela Associação Brasileira de Dermatologia, Dra. Helena Soares é uma renomada dermatologista com mais de 15 anos de experiência clínica. Sua trajetória é marcada por estudos aprofundados em dermatologia estética e reparadora, tendo realizado diversas formações internacionais em instituições de prestígio na Europa e Estados Unidos</p>
                </div>
            </div>
            <div className={styles.professionals_card}>
                <img src={mulherImage2} alt="Nome Profissional 1" className={styles.professionals_image} />
                <div className={styles.professionals_description}>
                    <p>Dra. Beatriz Fernandes

Formada pela Universidade Federal do Rio de Janeiro (UFRJ) com especialização em Dermatologia Cosmética pela Associação Brasileira de Dermatologia, Dra. Beatriz Fernandes é uma das vozes líderes em inovações tecnológicas no campo da dermatologia. Com mais de 10 anos de atuação, ela se destaca pela pesquisa e desenvolvimento de novas técnicas de tratamento.</p>
                </div>
            </div>
        </section>
    );
}

export default ProfessionalsComponent;




