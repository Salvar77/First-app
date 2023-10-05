
import Link from 'next/link';
import classes from "./Hero.module.scss";

const Hero = () => {

  

	return (
		<section id="hero" className={classes.hero}>
			<div className={classes.textOverlay}>
				<h1 className={classes.hero__title}>Tarot, Duchowość, Coaching</h1>
				<p>
					Pomagam zrozumieć i zmienić doświadczanie własnej rzeczywistości ✨
				</p>
				<Link href="#courses" className={classes.button}>Kursy</Link>
			</div>
		</section>
	);
};

export default Hero;
