import Image from 'next/image';
import Link from 'next/link';
import classes from "./Courses.module.scss";

export const coursesData = [
	{ id: 'courses1', image: "/courses-1.jpg", title: "Kursy 1"},
	{ id: 'courses2', image: "/courses-2.jpg", title: "Kursy 2"},
	{ id: 'courses3', image: "/courses-3.jpg", title: "Kursy 3"}
];

const Courses = () => {
	return (
		<section id="courses" className={classes.courses}>
			<h2 className={classes.courses__container}>Kursy</h2>

			

			{coursesData.map(course => (
				<div key={course.id} className={classes.singleCourse}>
				  <div>
					<Image className={classes.courses__img} src={course.image} alt="Opis grafiki" width={500} height={300} />
				  </div>
				  <div>
					<h2 className={classes.courses__text}>{course.title}</h2>
					<Link href={`/Courses/${course.id}`} className={classes.courses__btn}>Click</Link>
				  </div>
				</div>
			  ))}
		</section>
	);
};


export default Courses;
