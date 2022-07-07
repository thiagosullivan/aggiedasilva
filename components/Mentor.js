import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Aggie from '../assets/aggie-aula.png';
import {FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import styles from '../styles/Home.module.css';

function Mentor() {
  return (
    <div className={styles.mentor__section} id="mentor">
        <div className={styles.mentor__title}>
            <h2>Aggie DaSilva</h2>
            <p>O mentor</p>
        </div>
        <div className={styles.mentor__desc}>
            <div className={styles.mentor__colOne}>
                <p>CEO da L&SA, certificou-se em Coaching de Liderança em Harvard, e em psicométricos pela Thomas na Inglaterra. Foi ele quem trouxe o conceito DISC para o Brasil, em 1993. Liderou equipes de sucesso durante 25 anos nos EUA, e em 10 países da América Latina.</p>
                <div className={styles.mentor__socialMedia}>
                    <Link href="https://www.facebook.com/dasilvaaggie/" passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/aggiedasilva/" passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/lsacademyusa" passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </Link>
                </div>
            </div>
            <Image src={Aggie}/>
        </div>
        
    </div>
  )
}

export default Mentor