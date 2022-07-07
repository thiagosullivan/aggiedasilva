import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import styles from '../styles/Politicas.module.css';
import PoliticasPrivacidade from '../components/PoliticasPrivacidade';

export default function Politicas() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Políticas de Privacidade - Curso Sobre Liderança Em Vendas I L&SA I Aprenda Na Prática</title>
        <meta name="description" content="Curso Sobre Liderança Em Vendas. Desenvolva Seu Time E Venda Mais. Sou Pioneiro Na Metodologia DISC No Brasil. Consulte Nossos Valores." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <PoliticasPrivacidade />
      </main>
      <Footer />
      <Whatsapp />
    </div>
  )
}