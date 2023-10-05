
import Image from "next/image";
import coursesPicture1 from '../../assets/image/courses_1.jpg';
import coursesPicture2 from '../../assets/image/courses_2.jpg';
import coursesPicture3 from '../../assets/image/courses_3.jpg';
import Link from "next/link";
import classes from "./Courses.module.scss";


export const coursesData = [
	{
		id: "courses1",
		image: coursesPicture1,
		description:
			"Jeśli jesteś gotów na poznanie siebie, na pracę nad soba, na wiedzę, na temat tego co znajduje się w Twoim polu, aby posiadać wygląd, we własne możliwości, potencjał który jest na wyciągnięcie Twojej ręki, lub blokady, które należy usunąć, to czytanie jest idealne dla CIEBIE✨",
		title: "Kursy 1",
		amount: "200"
	},
	{
		id: "courses2",
		image: coursesPicture2,
		description: "Wysokie wibracje, oznaczają, że jesteś osobą, która na co dzień przejawia pozytywne emocje i uczucia.🤍✨ Widzisz pozytywy, w każdej rzeczy która Cię otacza, potrafisz zauważyć lekcje, w trudnych sytuacjach.👀🧘🏽‍♀️IE",
		title: "Kursy 2",
		amount: "400"
	},
	{
		id: "courses3",
		image: coursesPicture3,
		description:
			"Wysokie wibracje, oznaczają, że jesteś osobą, która na co dzień przejawia pozytywne emocje i uczucia.🤍✨ Widzisz pozytywy, w każdej rzeczy która Cię otacza, potrafisz zauważyć lekcje, w trudnych sytuacjach.👀🧘🏽‍♀️",
		title: "Kursy 3",
		amount: "600"
	},
];

const Courses = () => {



	return (
		<section id="courses" className={classes.courses}>
			<h2 className={classes.courses__container}>Kursy</h2>

			{coursesData.map((course) => (
				<div key={course.id} className={classes.singleCourse}>
					<div>
						<Image
							className={classes.courses__img} 
							src={coursesPicture1}
							alt="Opis grafiki"
						/>
					</div>
					<div>
						<h2 className={classes.courses__text}>{course.title}</h2>
						<Link
							href={`/Courses/${course.id}`}
							className={classes.courses__btn}
						>
							Click
						</Link>
					</div>
				</div>
			))}
		</section>
	);
};

export default Courses;
