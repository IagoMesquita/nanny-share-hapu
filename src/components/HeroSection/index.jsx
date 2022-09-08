import React from "react";
import Header from "../Header";
import styles from "./HeroSection.module.css";
import manageNanny from "../../images/ImageManageNanny.svg";
import iconPlay from "../../images/IconPlay.svg";

function HeroSection() {
  return (
    <div className={styles.container_hero}>
      <div className={styles.transparency_film}></div>
      <Header />
      <section className={styles.section_container}>
        <div className={styles.texts_container}>
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
          </p>
          <div className={ styles.play_container }>
            <button>
              <img src={iconPlay} alt="" />
            </button>
            <a href="default">See hapu in action (27 seconds)</a>
          </div>
        </div>
        <img src={manageNanny} alt="card-de-gerenciamente-de-babas" />
      </section>
    </div>
  );
}

export default HeroSection;
