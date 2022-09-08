import React from "react";
import styles from "./NotificationAvailability.module.css";
import profile from "../../images/ProfileImage.svg";

function NotificationAvailability() {
  return (
    <section className={styles.container}>
      <img src={profile} alt="imagem-da-babá" />
      
        <a href="default">Sarah’s day care available now in North Sydney</a>
				<h4>Wednesday, Thursday, Friday - 7:30 - 5:30</h4>
        
    </section>
  );
}

export default NotificationAvailability;
