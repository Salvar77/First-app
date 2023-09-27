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
				<h1>{course.title}</h1>

				<div className={classes.coursesPage__status}>
					<div className={classes.coursesPage__statusSegment}>
						<span className={classes.coursesPage__statusLabelo}>Current Status</span>
						<div className={classes.coursesPage__statusContento}>
							<span className={classes.coursesPage__statusWaiting}>Not Enrolled</span>
						</div>
					</div>

					<div className={classes.coursesPage__statusSegment}>
						<span className={classes.coursesPage__statusLabelo}>Price</span>
						<div className={classes.coursesPage__statusContento}>
							<span className={classes.coursesPage__statusPrice}>555zł</span>
						</div>
					</div>

					<div className={classes.coursesPage__statusSegment}>
						<span className={classes.coursesPage__statusLabelo}>Get Started</span>
						<div className={classes.coursesPage__statusContento}>
							<div className={classes.coursesPage__statusAction}>
								<a className={classes.coursesPage__statusBtn}>Zapisz się na szkolenie</a>
							</div>
						</div>
					</div>
				</div>

				<div>
					<p className={classes.coursesPage__text}>{course.description}</p>
					<Link href="/PaySection" className={classes.coursesPage__btn}>
						Dodaj do koszyka
					</Link>
					<br></br>
					<br></br>
					<p className={classes.coursesPage__text}>{course.description}</p>
					<Image
						src={course.image}
						alt="Opis grafiki"
						width={500}
						height={300}
						className={classes.coursesPage__img}
					></Image>
					<br></br>
					<br></br>
					<p className={classes.coursesPage__text}> {course.description}</p>
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
