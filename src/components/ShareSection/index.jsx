import { useState } from "react";
import DividingLine from "../DividingLine";
import styles from "./ShareSection.module.css";
import postUser from "../../service/postUser";
import validateEmail from "../../util/validateEmail";

function ShareSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [errorValidate, setErrorValidate] = useState("");
  const [errorApi, setErrorApi] = useState("");
 
  setTimeout(() => {setErrorApi('')}, 7000)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorApi('');
    setErrorValidate('');

    if (!name || !email) {
     return setErrorValidate('Os campos precisam ser preenchidos')
    }

    if (!validateEmail(email)) {
      return setErrorValidate('Email invalido')
    }


    const user ={
      name,
      email
    }

    try {
      await postUser(user);
    } catch (error) {
      console.log(error);
      setErrorApi(error.message)
    }
  
    setName("");
    setEmail("");
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
            value={name}
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
        { errorApi ? <span className="error">Algo deu errado!</span> : null}
        { errorValidate ? <span className="error">{errorValidate}</span> : null}
      </section>
      <DividingLine />
    </>
  );
}

export default ShareSection;
