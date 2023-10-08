import styles from "./AdditionalSection.module.scss";

const AdditionalSection = () => {
	return (
		<section id="about" className={styles.additionalSection}>
			<div>
				<i className="fas fa-quote-right"></i>
			</div>
			<p className={styles.additionalSection__text}>&quot;...Wszechświat to energia,która odpowiada na nasze oczekiwania.Ludzie są rownież jej częścią,więc gdy mamy pytanie,zjawiają się osoby,które przynoszą nam odpowiedz.&quot;</p>
            <p className={styles.additionalSection__text}>James Redfield, Niebiańska Przepowiednia</p>
		</section>
	);
};

export default AdditionalSection;
