import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WhatsappLogo from '../assets/whatsapp-logo.png';
import styles from '../styles/Home.module.css';

function Whatsapp() {
  return (
    <div className={styles.whatsapp}>
        <Link href="https://api.whatsapp.com/send?phone=13057535265&text=Ol%C3%A1%2C%20Aggie.%20Vim%20atrav%C3%A9s%20do%20seu%20site." passHref>
            <a target="_blank" rel="noopener noreferrer">
                <Image alt="Whatsapp" src={WhatsappLogo}/>
            </a>
        </Link>
    </div>
  )
}

export default Whatsapp