import styles from "./PaymentMethodsSection.module.css";
import valuesImage from "../../images/ImageSection3.svg";
import DividingLine from "../DividingLine";

function PaymentMethodsSection() {
  return (
    <>
    <section className={styles.section_container}>
      <img src={valuesImage} alt="valores por hora" />
      <div className={styles.text_container}>
        <h2>Shared payments made simple</h2>
        <p>
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing
          that bill week in, week out and you might encounter more than a few
          snares. But not with Hapu. Simply set your rates and our automated
          payment system takes care of the rest. You need never talk money or
          who owes what.
        </p>
				<a href="default">
				Read how Bridget’s share (without Hapu) ended over $15
				</a>
      </div>
    </section>
    <DividingLine/>

    </>

  );
}

export default PaymentMethodsSection;
