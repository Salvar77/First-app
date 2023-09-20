import Image from 'next/image';
import classes from "./Courses.module.scss";

const Courses = () => {
	return (
		<section id="courses" className={classes.courses}>
			<h2 className={classes.courses}>Kursy</h2>

			<div className={classes.singleCourse}>
				<div>
					<Image className={classes.courses__img} src="/courses-1.jpg" alt="Opis grafiki" width={500} height={300} />
				</div>
				<div>
					<h2 className={classes.courses__text}>Kursy</h2>
					<button className={classes.courses__btn}>Click</button>
				</div>
			</div>

			<div className={classes.singleCourse}>
				<div>
					<Image className={classes.courses__img} src="/courses-2.jpg" alt="Opis grafiki" width={500} height={300} />
				</div>
				<div>
					<h2 className={classes.courses__text}>Kursy</h2>
					<button className={classes.courses__btn}>Click</button>
				</div>
			</div>

			<div className={classes.singleCourse}>
				<div>
					<Image className={classes.courses__img} src="/courses-3.jpg" alt="Opis grafiki" width={500} height={300} />
				</div>
				<div>
					<h2 className={classes.courses__text}>Kursy</h2>
					<button className={classes.courses__btn}>Click</button>
				</div>
			</div>

		</section>
	);
};


export default Courses;
