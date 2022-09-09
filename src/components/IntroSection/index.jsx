import styles from "./IntroSection.module.css";
import notbook from "../../images/ImageSection1.svg";

function IntroSection() {
  return (
    <section className={styles.section_container}>
      <div>
        <h2>Share your home, nanny and costs</h2>
        <p>
          You have a fantastic home, a fantastic nanny and wouldn’t cutting your
          costs in half be, well, fantastic?! If only it was easy to connect
          with other parents to share your costs? Well now it is, with Hapu.{" "}
          <a href="default">Hapu means tribe</a> and it’s our foundational 3
          tribal principles that empowers you to create and manage your own
          tribe. A tribe that together has the power to create new affordable
          solutions in childcare that work for you and your community.
        </p>
        <a href="default">Ready to get started?</a>
      </div>
      <img src={notbook} alt="notbook e card com informações" />
    </section>
  );
}

export default IntroSection;
