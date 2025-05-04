import Attendance from "../Attendance/Attendance";
import Intro from "../Intro/Intro";
import styles from "./Home.module.scss";
function Main() {
  return (
    <>
      <main className={styles.main}>
        <Intro />
        <section className={styles.place}>
          <h2>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9C5 13.25 9 18.5 11.25 21.14C11.66 21.61 12.34 21.61 12.75 21.14C15 18.5 19 13.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                fill="currentColor"
              />
            </svg>
            Мястото
          </h2>
          <p className={styles.placeDescription}>
            Сгушен между висока борова гора и приказния язовир Пасарел,<br></br>
            <span>Pasarel Lake Club</span> спечели сърцата ни с невероятната си
            атмосфера. Клубът се намира на 15 км от София в посока Самоков, а
            точната му локация може да откриете тук:
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.2678013676073!2d23.477637176079718!3d42.5496061231055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa7f0f29c4ec75%3A0x9633c93788b82bd1!2sPasarel%20Lake%20Club!5e0!3m2!1sen!2sbg!4v1739890540498!5m2!1sen!2sbg"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <article className={styles.placeImages}>
            <img
              src="https://pasarellake.club/wp-content/uploads/2023/01/DJI_0332-4-LEss-saturation.jpg"
              alt="test"
            />
            <img
              src="https://pasarellake.club/wp-content/uploads/2023/01/327388844_1236141043640513_2987192439625229201_n-1.jpg"
              alt="test"
            />
            <img
              src="https://pasarellake.club/wp-content/uploads/2023/01/viber_image_2022-11-23_16-02-57-449.jpg"
              alt="test"
            />
          </article>
        </section>
        <section className={styles.program}>
          <h2>Програмата</h2>
          <p>
            <span>2</span>nd August, 2025
          </p>
          <article>
            <ul>
              <li>
                <span>16:00</span> - Welcome drink
              </li>
              <li>
                <span>16:30</span> - Изнесен ритуал по сключване на граждански
                брак
              </li>
              <li>
                <span>17:00</span> - Приемане на поздравления и снимки с гостите
              </li>
              <li>
                <span>18:30</span> - Празнична вечеря
              </li>
              <li>
                <span>22:00</span> - Разрязване на сватбената торта
              </li>
              <li>
                <span>22:30</span> - Afterparty
              </li>
            </ul>
          </article>
          <p>
            Цялото събитие ще се проведе в градините и ресторанта на Pasarel
            Lake Club.
          </p>
        </section>

        <section className={styles.details}>
          <h2>Детайли</h2>
          <article>
            <ul>
              <li>
                Всички наши гости, които пътуват от далеч, ще бъдат настанени в
                хотел Жасмин. Хотелът се намира в София в квартал Симеоново.
                Настаняването е в 14.00 часа на 02.08.2025, а освобождаването е
                до 11.00 часа на 03.08.2025.
              </li>
              <li>
                Поради ограничение в капацитета на заведението, а и за да можете
                да се забавлявате максимално, моля да уважите предпочитанието ни
                сватбеното тържество да е само за възрастни. Сигурни сме, че ще
                намерите свободна баба на разположение за малчуганите тази
                вечер.
              </li>
              <li>
                Ако се чудите какво да ни подарите можете да ни помогнете да
                реализираме мечтания меден месец.
              </li>
            </ul>
          </article>
        </section>
        <Attendance />
        <section className={styles.footer}>
          <h3>
            За всички, които искат да се потопят напълно в атмосферата на нашия
            празник, нашият dress code включва следната палитра:
          </h3>
          <div className={styles.colorPallete}>
            <span className={styles.palette1}></span>
            <span className={styles.palette2}></span>
            <span className={styles.palette3}></span>
            <span className={styles.palette4}></span>
            <span className={styles.palette5}></span>
          </div>
          <h3>
            Ако имате други въпроси, не се колебайте да се свържете с нас.
            Очакваме Ви!
          </h3>
        </section>
      </main>
    </>
  );
}

export default Main;
