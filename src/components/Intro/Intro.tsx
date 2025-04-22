import React from "react";
import styles from "./Intro.module.scss";
import mainIntroImg from "../../assets/c5c0c7a2-0738-412e-bc15-1651c687c05e.jpg";
import firstIntroImg from "../../assets/hearths-sec1.png";
function Intro() {
  return (
    <>
      <section className={styles.wrapper}>
        <section className={styles.sectionFirst}>
          <img src={firstIntroImg} alt="test" />
          <h1>Ани и Енвер</h1>
          <h2>Ani & Enver Wedding</h2>
          <h3>August 2, 2025</h3>
        </section>
        <section className={styles.sectionSecond}>
          <article>
            <span>...И разбрали ясно, че някак изведнъж,</span>
            <span>двамата пораснали: тя - жена, той - мъж.</span>
            <span>И открили точно, че този трепет нов</span>
            <span>не игра нарочна е, а истинска любов...</span>
            <span>Тръгнали те заедно и до днес вървят</span>
            <span>и път да няма, не ще се спрат…</span>

            <img src={mainIntroImg} alt="test" />
          </article>
        </section>
      </section>
    </>
  );
}

export default Intro;
