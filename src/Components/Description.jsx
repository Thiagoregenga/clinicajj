import React from 'react';
import styles from './Description.module.css';

function Description() {
    return (
        <div>
            <h2 className={styles.segundaSecao_h2}>Clínica de Estética</h2>
            <h3 className={styles.segundaSecao_h3}>Transformando vidas por meio da beleza e bem-estar</h3>
            <p className={styles.segundaSecao_p}>Dedicada à arte da beleza e ao bem-estar, a ClinicaJJ é o seu santuário urbano para rejuvenescer corpo, mente e espírito. Situada no coração da cidade, nossa clínica oferece uma gama de tratamentos estéticos avançados, executados por uma equipe de profissionais altamente qualificados, em um ambiente sereno e acolhedor.

Entendemos que cada pessoa é única. Por isso, nossos especialistas estão comprometidos em personalizar tratamentos que atendam às necessidades individuais de cada cliente, garantindo resultados naturais e impressionantes.

Convidamos você a explorar nossos serviços, agendar sua consulta e descobrir a transformação que a  pode trazer à sua vida. Sinta-se renovado, revigorado e radiante conosco.</p>
        </div>
    );
}

export default Description;
