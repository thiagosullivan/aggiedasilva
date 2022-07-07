import Head from 'next/head'
import Image from 'next/image'
import Depoimento from '../components/Depoimento'
import Footer from '../components/Footer'
import FormSection from '../components/FormSection'
import Header from '../components/Header'
import Mentor from '../components/Mentor'
import Parceiros from '../components/Parceiros'
import ProgramSection from '../components/Programacao'
import Treinamento from '../components/Treinamento'
import Whatsapp from '../components/Whatsapp'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Curso Sobre Liderança Em Vendas I L&SA I Aprenda Na Prática</title>
        <meta name="description" content="Curso Sobre Liderança Em Vendas. Desenvolva Seu Time E Venda Mais. Sou Pioneiro Na Metodologia DISC No Brasil. Consulte Nossos Valores." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <FormSection />
        <Treinamento />
        <ProgramSection />
        <Depoimento />
        <Mentor />
        <Parceiros />
      </main>
      <Footer />
      <Whatsapp />
    </div>
  )
}
