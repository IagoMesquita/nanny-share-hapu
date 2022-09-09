import styles from "./BillingHistorySection.module.css";
import tableImage from "../../images/ImageSection4.svg";

import React from "react";

function BillingHistorySection() {
  return (
    <section>
      <h2>A framework built for the long term</h2>
      <p>
        Childcare is for the long term. And you need a framework you can count
        on that gives your share long term viability and success. That’s why
        we’ve defined Hapu around our three tribal principles; clearly defined
        process, transparency over money and equality of participation.
      </p>
      <img src={tableImage} alt="tabela com histórico dos serviços" />
			<a href="default">Read how Hapu’s tribal background defines our app</a>
    </section>
  );
}

export default BillingHistorySection;
