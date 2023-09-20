import { useState, useEffect } from "react";
import Link from 'next/link';
import classes from "./Hero.module.scss";

const Hero = () => {


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
		<div id="hero" className={classes.hero}>
			<div className={classes.textOverlay}>
				<h1>Tarot, Duchowość, Coaching</h1>
				<p>
					Pomagam zrozumieć i zmienić doświadczanie własnej rzeczywistości ✨
				</p>
				<Link href="#courses" className={classes.button}>Kursy</Link>
			</div>
		</div>
	);
};

export default Hero;
