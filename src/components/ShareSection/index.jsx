import DividingLine from "../DividingLine";
import styles from "./ShareSection.module.css";

function ShareSection() {
  return (
    <>
    <section className={styles.section_container}>
      <div className={styles.text_container}>
        <h3>Are you a parent without a nanny and looking to share?</h3>
        <p>
          Leave us your name and email and we’ll update you as soon as a share
          becomes available in your area!
        </p>
      </div>
      <form className={ styles.form_container }>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <button>Send</button>
      </form>
    </section>
    <DividingLine/>
    </>
  );
}

export default ShareSection;
