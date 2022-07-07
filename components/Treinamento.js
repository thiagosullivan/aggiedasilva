import React from 'react';
import styles from '../styles/Home.module.css';

function Treinamento() {
  return (
    <div className={styles.treinamentoContainer} id="treinamento">
        <div className={styles.treinamentoContent}>
            <span className={styles.secTwo__border}></span>
            <h2>Por que fazer nosso treinamento?</h2>
            <p>A empresa que tem real interesse em investir em um programa como este, deve fazer com o melhor e com a melhor, porque a L&SA - Leadership & Sales Academy é uma empresa americana com mais de vinte anos de experiência voltada para os brasileiros, com o programa administrado em um idioma que você entende, o português. Nossa metodologia inclui dois assessments (avaliação) antes do início do treinamento: A Análise de Perfil Pessoal (DISC) e o Teste de Inteligência Emocional (TEIQue). O mentor Aggie DaSilva, diretamente dos EUA, dará a cada um, o feedback dos seus resultados. Além disso entregaremos todo o material com o conteúdo do programa.</p>
        </div>
    </div>
  )
}

export default Treinamento