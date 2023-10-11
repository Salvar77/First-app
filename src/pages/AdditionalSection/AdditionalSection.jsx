import styles from "./AdditionalSection.module.scss";
import pattern from '../../assets/image/pattern.svg';
import Image from "next/image";

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
	
			
		</section>
	);
};

export default AdditionalSection;
