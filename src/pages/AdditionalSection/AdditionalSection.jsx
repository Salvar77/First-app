import styles from "./AdditionalSection.module.scss";
import HorizontalLine from "../Horizontal Line/HorizontalLine";

const AdditionalSection = () => {
	return (
		<section id="about" className={styles.additionalSection}>
			<div>
				<i className="fas fa-quote-right"></i>
			</div>
			<p className={styles.additionalSection__text}>
				&quot;Some Thoughts&quot;
			</p>
			<p className={styles.additionalSection__text}></p>
			<HorizontalLine />
			
		</section>
	);
};

export default AdditionalSection;
