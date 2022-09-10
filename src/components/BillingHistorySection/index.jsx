import styles from "./BillingHistorySection.module.css";
import tableImage from "../../images/ImageSection4.svg";
import DividingLine from "../DividingLine";

function BillingHistorySection() {
  return (
    <>
      <section className={styles.section_container}>
        <h2>A framework built for the long term</h2>
        <p>
          Childcare is for the long term. And you need a framework you can count
          on that gives your share long term viability and success. That’s why
          we’ve defined Hapu around our three tribal principles; clearly defined
          process, transparency over money and equality of participation.
        </p>
        <a href="default">Read how Hapu’s tribal background defines our app</a>
        <img src={tableImage} alt="tabela com histórico dos serviços" />
      </section>
      <DividingLine />
    </>
  );
}

export default BillingHistorySection;
