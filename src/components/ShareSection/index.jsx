import { useState } from "react";
import DividingLine from "../DividingLine";
import styles from "./ShareSection.module.css";

function ShareSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user ={
      name,
      email
    }
    console.log(user);
    setName('');
    setEmail('');

  };

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
        <form onSubmit={handleSubmit} className={styles.form_container}>
          <input
            type="text"
            name="name"
            valune={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
          <button>Send</button>
        </form>
      </section>
      <DividingLine />
    </>
  );
}

export default ShareSection;
