import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import styles from '../styles/Home.module.css';

function Depoimento() {

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }
    
    const opts = {
        height: '730',
        width: '1300',
        playerVars: {
          autoplay: 0,
        },
      };


  return (
    <div className={styles.depoimento__section}>
        <div className={styles.depoimento__title}>
            <h2>O que falam da gente!</h2>
            <span></span>
        </div>
        <div className={styles.depoimento__title}>
            <YouTube
                videoId="_AGXEAh-Hrk"
                opts={opts}
                onReady={onPlayerReady}
            />
        </div>
    </div>
  )
}

export default Depoimento