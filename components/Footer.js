import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function Footer() {
  return (
    <footer>
        <div className={styles.footerOne}>
            <Link href="/politica-de-privacidade">
                <a>Política de Privacidade</a>
            </Link>
            <span>|</span>
            <Link href="https://www.facebook.com/dasilvaaggie">
                <a>Aggie DaSilva</a>
            </Link>
            <span>|</span>
            <Link href="/">
                <a>Contato</a>
            </Link>
        </div>
        <div className={styles.footerTwo}>
            <p>© 2021 <strong>Leadership & Sales Academy</strong> - Desenvolvido por <strong>Guia-se Marketing Digital</strong>.</p>
        </div>
    </footer>
  )
}

export default Footer