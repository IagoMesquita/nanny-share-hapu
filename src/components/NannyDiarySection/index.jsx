import styles from "./NannyDiarySection.module.css";
import icon from "../../images/ImageSection5.svg";

function NannyDiarySection() {
  return (
    <section className={styles.section_container}>
      <img src={icon} alt="desenho de uma agenda e celular" />
      <h2>Coming soon: Nanny Share Daily Diary!</h2>
      <p>
        With the Hapu daily diary your nanny will be able to update you and your
        sharers with photos and commentary of the day. You and sharers will
        receive notifications and you’ll be able to login to view the daily
        adventures fo your little ones. We can’t wait!
      </p>
    </section>
  );
}

export default NannyDiarySection;
