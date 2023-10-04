import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Courses.module.scss";
import img1 from "/courses-1.jpg"

export const coursesData = [
	{
		id: "courses1",
		image: img1,
		description:
			"Jeśli jesteś gotów na poznanie siebie, na pracę nad soba, na wiedzę, na temat tego co znajduje się w Twoim polu, aby posiadać wygląd, we własne możliwości, potencjał który jest na wyciągnięcie Twojej ręki, lub blokady, które należy usunąć, to czytanie jest idealne dla CIEBIE✨",
		title: "Kursy 1",
		amount: "200"
	},
	{
		id: "courses2",
		image: "/courses-2.jpg",
		description: "Wysokie wibracje, oznaczają, że jesteś osobą, która na co dzień przejawia pozytywne emocje i uczucia.🤍✨ Widzisz pozytywy, w każdej rzeczy która Cię otacza, potrafisz zauważyć lekcje, w trudnych sytuacjach.👀🧘🏽‍♀️IE",
		title: "Kursy 2",
		amount: "400"
	},
	{
		id: "courses3",
		image: "/courses-3.jpg",
		description:
			"Wysokie wibracje, oznaczają, że jesteś osobą, która na co dzień przejawia pozytywne emocje i uczucia.🤍✨ Widzisz pozytywy, w każdej rzeczy która Cię otacza, potrafisz zauważyć lekcje, w trudnych sytuacjach.👀🧘🏽‍♀️",
		title: "Kursy 3",
		amount: "600"
	},
];

const Courses = () => {

	const [windowWidth, setWindowWidth] = useState(0);

  

	useEffect(() => {
		setWindowWidth(window.innerWidth);

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);


	return (
		<section id="courses" className={classes.courses}>
			<h2 className={classes.courses__container}>Kursy</h2>

			{coursesData.map((course) => (
				<div key={course.id} className={classes.singleCourse}>
					<div>
						<Image
							className={classes.courses__img} 
							src={course.image}
							alt="Opis grafiki"
							width={500}
							height={300}
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
