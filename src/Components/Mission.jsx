import React from 'react';
import styles from './Mission.module.css';

function Mission() {
    return (
        <div className={styles.Missão}>
            <h2 className={styles.Missão_h2}>Missão</h2>
            <p className={styles.Missão_p}>Empoderar cada indivíduo a celebrar sua beleza única, oferecendo tratamentos estéticos de alta qualidade, que não só realçam a beleza exterior, mas também nutrem o espírito e a confiança.

Desde nossa fundação, nos dedicamos a criar um ambiente onde a ciência e a arte se encontram, proporcionando soluções estéticas que respeitam a individualidade de cada cliente. Nossa equipe de profissionais altamente treinados está comprometida em entender suas aspirações estéticas, proporcionando resultados que refletem sua verdadeira essência.

Na [Nome da Clínica], nós nos esforçamos para ser mais do que apenas um estabelecimento estético - queremos ser um local onde os clientes se sentem ouvidos, valorizados e transformados. Um lugar onde a beleza é celebrada em todas as suas formas.</p>
        </div>
    );
}

export default Mission;
