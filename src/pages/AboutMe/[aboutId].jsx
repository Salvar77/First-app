import Image from "next/image";
import AboutMePicture from "../../assets/image/yoga-640.jpg";
import styles from "../AboutMe/AboutMe.module.scss";



const AboutMe = () => {
	return (
		<>
		<section id="about" className={styles.aboutMe}>
			<div>
				<Image src={AboutMePicture} className={styles.aboutMe__img} alt="" />
			</div>

			<div className={styles.aboutMe__content}>
				<div className={styles.aboutMe__box}>
					<h2 className={styles.aboutMe__header}>
						Cześć, jestem Jula, Twój Duchowy Mentor
					</h2>
					<p className={styles.aboutMe__text}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
						debitis velit quos eaque optio veniam veritatis, nostrum est
						distinctio? Autem illum fugiat omnis pariatur nihil aut sint officia
						quo praesentium.
					</p>
				</div>

				<div className={styles.aboutMe__boxLinks}>
					<a
						href="https://www.youtube.com/user/TwojaNazwaUzytkownika"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-youtube"></i>
					</a>
					<a
						href="https://www.facebook.com/TwojaNazwaUzytkownika"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-facebook"></i>
					</a>
					<a
						href="https://www.instagram.com/moon.julu88/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-instagram"></i>
					</a>
				</div>
			</div>
		</section>
		</>
	);
};

export default AboutMe;
