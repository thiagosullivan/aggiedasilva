import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WhatsappLogo from '../assets/whatsapp-logo.png';
import styles from '../styles/Home.module.css';

function Whatsapp() {
  return (
    <div className={styles.whatsapp}>
        <Link href="/" passHref>
            <a target="_blank" rel="noopener noreferrer">
                <Image src={WhatsappLogo}/>
            </a>
        </Link>
    </div>
  )
}

export default Whatsapp