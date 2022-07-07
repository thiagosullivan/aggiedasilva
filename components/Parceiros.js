import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hm from '../assets/hm-logo.png';
import Ledvance from '../assets/ledvance-logo.png';
import Lumini from '../assets/lumini-logo.png';
import Neoris from '../assets/neoris-logo.png';
import Niquan from '../assets/niquan-logo.png';
import Panam from '../assets/panam-logo.png';
import Sap from '../assets/sap-logo.png';
import Sony from '../assets/sony-logo.png';
import Vbmc from '../assets/vbmc-logo.png';

import styles from '../styles/Home.module.css';

function Parceiros() {
  return (
    <div className={styles.parceiros__section} id="parceiros">
      <div className={styles.parceiros__content}>
        <h2>Será um prazer ter você conosco</h2>
        <p>Alguns dos nossos parceiros</p>
        <div className={styles.parceiros__images}>
          <div>
            <Link href="https://www2.hm.com/en_us/index.html" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image alt="HM" src={Hm}/>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.ledvance.com.br/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image alt="Ledvance" src={Ledvance}/>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://lojavirtual.lumini.com.br/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image alt="Lumini" src={Lumini}/>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.neoris.com/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image alt="Neoris" src={Neoris}/>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.niquanenergy.com/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image alt="Niquan Energy" src={Niquan}/>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.panam.org/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image alt="Panam" src={Panam}/>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.sap.com/brazil/index.html" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image alt="SAP" src={Sap}/>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.sony.com.br" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image alt="Sony" src={Sony}/>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://vbmc.com.br/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image alt="VBMC" src={Vbmc}/>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parceiros