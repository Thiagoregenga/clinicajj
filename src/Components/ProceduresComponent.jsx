import styles from './ProceduresComponent.module.css';

function ProceduresComponent() {
    return (
        <section className={styles.procedures}>
            <h2>Procedimentos</h2>
            <article className={styles.procedureCard}>
                <h3>Laser</h3>
                <p>O tratamento estético a laser é uma técnica inovadora que utiliza feixes de luz concentrada para tratar diversas preocupações estéticas e dermatológicas. Esses feixes de luz são absorvidos pela pele e transformados em calor, que pode tratar uma variedade de condições, dependendo do tipo de laser utilizado e da configuração escolhida.</p>
            </article>
            <article className={styles.procedureCard}>
                <h3>Preenchimento</h3>
                <p>O preenchimento estético, comumente chamado de preenchimento dérmico, é um procedimento não cirúrgico que envolve a injeção de substâncias sob a pele para restaurar volume, suavizar linhas e rugas, e melhorar os contornos faciais. Diferentes tipos de preenchedores são projetados para tratar diferentes preocupações e áreas do rosto.</p>
            </article>
            <article className={styles.procedureCard}>
                <h3>Botox</h3>
                <p>O Botox® é a marca comercial da toxina botulínica tipo A, um produto usado mundialmente para tratamentos estéticos e médicos. Quando injetado em pequenas quantidades em músculos específicos, o Botox® bloqueia sinais nervosos que fazem os músculos se contraírem, resultando no relaxamento e alisamento da pele</p>
            </article>
            <article className={styles.procedureCard}>
                <h3>Ultafromer</h3>
                <p>O Ultraformer é uma tecnologia avançada que utiliza ultrassom micro e macrofocado para tratamentos de rejuvenescimento facial e corporal. Ele promove um lifting não cirúrgico, tratando a flacidez e estimulando a produção de colágeno.</p>
            </article>
        </section>
    );
}

export default ProceduresComponent;
