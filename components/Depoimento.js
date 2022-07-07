import React from 'react';
import { YouTubeLite } from 'react-youtube-lite';
import styles from '../styles/Home.module.css';

function Depoimento() {

  return (
    <div className={styles.depoimento__section}>
        <div className={styles.depoimento__title}>
            <h2>O que falam da gente!</h2>
            <span></span>
        </div>
        <div className={styles.depoimento__video}>
            <YouTubeLite
                url="https://www.youtube.com/watch?v=_AGXEAh-Hrk"
                title="Depoimento Cliente Lumini"
                poster="sddefault"
            />
        </div>
    </div>
  )
}

export default Depoimento