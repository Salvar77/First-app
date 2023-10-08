import Image from "next/image";
import styles from '../Main/Home.module.scss';
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<section id="AboutMe" className={styles.aboutMe}>
				<div>
					<Image
						className={styles.aboutMe__img}
						src="/yoga-640.jpg"
						alt="Opis obrazu"
						width={500}
						height={300}
					/>
				</div>
				<div className={styles.aboutMe__boxText}>
					<h2 className={styles.sectionHeading}>
						Cześć, jestem Jula, Twój Duchowy Mentor
					</h2>
					<p className={styles.aboutMe__info}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
						nesciunt officiis, dicta dolore, quos voluptates quod ad beatae at
						eos quia rerum fuga voluptatum? Magnam laborum aperiam
						exercitationem accusantium debitis est, enim animi provident dolor
						perferendis. Vitae excepturi consequuntur porro doloribus eos
						provident facere. Perspiciatis voluptatum explicabo excepturi et
						inventore voluptatem beatae omnis reiciendis! Cumque eius facilis
						quidem perferendis sed quae iste soluta blanditiis. Vitae sunt ipsam
						nihil ad quam delectus explicabo a fugit quidem corrupti eaque
						repudiandae ducimus beatae rem quas reprehenderit unde porro
						consequuntur fugiat, magnam officiis molestiae dicta suscipit. Et
						voluptatum sint sed molestias tempore similique eligendi.
					</p>
					<Link href="/AboutMe/about" className={styles.aboutMe__btn}>&#10132;</Link>
					<div className={styles.links} >
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
		</main>
	);
}
