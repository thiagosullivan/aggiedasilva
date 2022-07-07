import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoHeader from '../assets/lsausa-white-logo.png';
import styles from '../styles/Home.module.css';

function Header() {

    const [open, setOpen] = useState(false);
    function openHamburger(){
        setOpen(!open)
    }

  return (
    <header className={styles.header}>
        <div className={styles.header__container}>
            <Link href="/">
                <a>
                    <Image src={logoHeader} width={100} height={43}/>
                </a>
            </Link>
            <div  className={`header__hamb ${open ? "open" : ""}`} onClick={openHamburger}>
                <div className="header__hamb__btn"></div>
            </div>
            <nav>
                <ul className={ open ? "menu__open" : ""}>
                    <li onClick={openHamburger}>
                        <Link href="/#treinamento">
                            <a>Treinamento</a>
                        </Link>
                    </li>
                    <li onClick={openHamburger}>
                        <Link href="/#programacao">
                            <a>Programação</a>
                        </Link>
                    </li>
                    <li onClick={openHamburger}>
                        <Link href="/#mentor">
                            <a>O Mentor</a>
                        </Link>
                    </li>
                    <li onClick={openHamburger}>
                        <Link href="/#parceiros">
                            <a>Parceiros</a>
                        </Link>
                    </li>
                    <li onClick={openHamburger}>
                        <Link href="/#contato">
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