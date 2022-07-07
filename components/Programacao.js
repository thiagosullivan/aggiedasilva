import React from 'react';
import { FaThumbtack } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

function ProgramSection() {
  return (
    <section className={styles.programa__section}>
        <div className={styles.programa__line}></div>
        <div className={styles.programa__colOne}>
            <h1>Conteúdo do programa</h1>
            <div className={styles.programa__list}>
                <div className={styles.programa__listItem}>
                    <h3><FaThumbtack /> Módulo 1 - Autoconhecimento</h3>
                    <p>O primeiro passo para inteligência emocional é o autoconhecimento. Conhecendo-se bem e aos outros é o primeiro degrau em direção à liderança.</p>
                </div>
                <div className={styles.programa__listItem}>
                    <h3><FaThumbtack /> Módulo 2 - O que é Liderança?</h3>
                    <p>&ldquo;É fazer acontecer o que tem que acontecer em tempo hábil, e de forma correta, através de outras pessoas apaixonadas por aquilo que fazem.&rdquo;</p>
                </div>
                <div className={styles.programa__listItem}>
                    <h3><FaThumbtack /> Módulo 3 - Inteligência Emocional Aplicada à Liderança</h3>
                    <p>&ldquo;Ao desenvolver a nossa inteligência emocional nos tornamos aptos a liderar uma equipe de sucesso.&rdquo;</p>
                </div>
                <div className={styles.programa__listItem}>
                    <h3><FaThumbtack /> Módulo 4 - Liderança Avançada</h3>
                    <p>Nos mostra e nos incentiva a olhar para a mesma paisagem com outros olhos.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProgramSection