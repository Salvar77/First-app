import classes from "./CoursesPage.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { coursesData } from "../../components/Main/Courses";

const CoursesPage = () => {
	const router = useRouter();

	const { coursesId } = router.query;

	if (!coursesId) return null;

	const course = coursesData.find((c) => c.id === coursesId);

	if (!course) return <p>Kurs nie został znaleziony</p>;

	return (
		<section id="courses1" className={classes.coursesPage}>
			<div className={classes.coursesPage__box}>
				<div>
					<Image
						src={course.image}
						alt="Opis grafiki"
						width={500}
						height={300}
						className={classes.coursesPage__img}
					></Image>
				</div>
				<div>
					<h1>{course.title}</h1>
					<p className={classes.coursesPage__text}>
						wspólna transformacja energetyczna, w której przejdziesz przez różne
						zakamarki swojej energetyki (WŁASNEGO WNĘTRZA) i wzniesiesz swoje
						wibracje na wysokości, które umożliwią Ci poczuć, jak to jest być na
						energetycznym “haju” i z łatwością dokonywać skoków kwantowych i
						DOŚWIADCZAĆ SIEBIE od STRONY ZAPLECZA💫🧿👇🏽
					</p>
					<Link href="/PaySection" className={classes.coursesPage__btn}>
						Dodaj do koszyka
					</Link>
					<br></br>
					<br></br>
					<p className={classes.coursesPage__text}>
						GLOW UP ENERGETYCZNY TO 1,5 GODZINNY TRANS DO SIEBIE!
					</p>
					<Image
						src={course.image}
						alt="Opis grafiki"
						width={500}
						height={300}
						className={classes.coursesPage__img}
					></Image>
					<br></br>
					<br></br>
					<p className={classes.coursesPage__text}>
						{" "}
						Piękna Istoto🤍 Zapraszam Cię na 1,5/2 godzinne praktyczne warsztaty
						online, gdzie wspólnie popracujemy nad twoją energetyką: 1.Czym jest
						TRANS DO SIEBIE? I co mi on da? Co umożliwi? 2.Dogłębne oczyszczanie
						energetyczne 3. Oczyszczanie czakr/centrów energetycznych 4.
						Doładowanie energetyczne 5. Ustabilizowanie energetyki ciała 6.
						Praca z polem serca 7. Uwalnianie emocji, praca z blokadami
						energetycznymi 8. Podróż wielowymiarowa w twoją bezpieczną
						przestrzeń energetyczną. Rozmowa z własną nadświadomością.
					</p>
				</div>
				<div>
					<h2>Kurs zawartość</h2>
					<a>video masterclass</a>
				</div>
			</div>
		</section>
	);
};

export default CoursesPage;
