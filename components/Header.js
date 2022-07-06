import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoHeader from '../assets/lsausa-white-logo.png';
import styles from '../styles/Home.module.css';

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.header__container}>
            <Link href="/">
                <a>
                    <Image src={logoHeader} width={100} height={43}/>
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Treinamento</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Programação</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>O Mentor</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Parceiros</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Contato</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header