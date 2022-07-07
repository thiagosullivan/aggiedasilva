import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://www.lsausa.com.br/"/>
      <meta property="og:title" content="Curso Sobre Liderança Em Vendas I L&SA I Aprenda Na Prática"/>
      <meta property="og:description" content="Curso Sobre Liderança Em Vendas. Desenvolva Seu Time E Venda Mais. Sou Pioneiro Na Metodologia DISC No Brasil. Consulte Nossos Valores."/>
      <meta property="og:image" content="https://raw.githubusercontent.com/thiagosullivan/aggiedasilva/main/assets/lsausa-metatag.jpg"/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://www.lsausa.com.br/"/>
      <meta property="twitter:title" content="Curso Sobre Liderança Em Vendas I L&SA I Aprenda Na Prática"/>
      <meta property="twitter:description" content="Curso Sobre Liderança Em Vendas. Desenvolva Seu Time E Venda Mais. Sou Pioneiro Na Metodologia DISC No Brasil. Consulte Nossos Valores."/>
      <meta property="twitter:image" content="https://raw.githubusercontent.com/thiagosullivan/aggiedasilva/main/assets/lsausa-metatag.jpg"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}