import React from 'react'
import Header from '../Header';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.container_hero}>
        <div className={styles.transparency_film}></div>
        <Header/>
    </div>
  )
}

export default HeroSection;