import React from 'react';

import styles from './styles.module.css';

const Video = (props: { src: string; }) => (
  <div className={styles.container}>
    <iframe
      width="100%"
      height="100%"
      frameBorder="0" 
      allowFullScreen
      src={props.src} 
      className={styles.frame}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
  </div>
);

export default Video;