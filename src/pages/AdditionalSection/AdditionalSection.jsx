import styles from "./AdditionalSection.module.scss";
import HorizontalLine from "../Horizontal Line/HorizontalLine";

const AdditionalSection = () => {
  return (
    <section id="about" className={styles.additionalSection}>
      <div className={styles.fas}>
        <i className="fas fa-quote-right"></i>
      </div>
      <p className={styles.additionalSection__text}>&quot;Naja&quot;</p>
      <div className={styles.fas}>
        <i className="fas fa-quote-right"></i>
      </div>

      <HorizontalLine />
    </section>
  );
};

export default AdditionalSection;
