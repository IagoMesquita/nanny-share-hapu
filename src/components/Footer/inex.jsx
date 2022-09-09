import React from "react";
import styles from "./Footer.module.css";

// logos
import logo from "../../images/LogoHapu.svg";
import iconCalendar from "../../images/IconCalendar.svg";
import iconFacebook from "../../images/Facebook.svg";
import iconIsntagram from "../../images/Instagram.svg";
import iconTwitter from "../../images/Twitter.svg";

function Footer() {
  return (
    <footer className={styles.container_footer}>
      <div className={styles.container_create}>
        <h2>Become a nanny share host</h2>
        <p className="p">Takes less than 5 minutes to get started</p>
        <button className={styles.btn_create}>
          <img src={iconCalendar} alt="icone-calendario" />
          <span className={styles.text_btn}>
            <p>Create Your Nanny Share</p>
            <p>Takes less than 5 minutes</p>
          </span>
        </button>
        <a href="default">Or browse local nanny-shares</a>
      </div>
      <div className={styles.container_nav_services}>
        <img src={logo} alt="logo-hapu" />
        <nav className={styles.nav_services}>
          <span>
            <a href="default">Share Your Nanny</a>
          </span>
          <span>
            <a href="default">Our Story</a>
          </span>
          <span>
            <a href="default">Blog</a>
          </span>
          <span>
            <a href="default">Terms & Privacy</a>
          </span>
        </nav>
        <nav className={styles.nav_social }>
          <a href="default">
            <img src={iconFacebook} alt="icone-facebook" />
          </a>
          <a href="default">
            <img src={iconTwitter} alt="icone-facebook" />
          </a>
          <a href="default">
            <img src={iconIsntagram} alt="icone-facebook" />
          </a>
        </nav>
      </div>
      <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </footer>
  );
}

export default Footer;
