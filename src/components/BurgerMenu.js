import { useState, useEffect } from "react";
import classes from "./BurgerMenu.module.css";

const BurgerMenu = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 0
	); // tutaj zdefiniowana

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		// Upewnij się, że usuwasz event listener przy unmountingu
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (windowWidth >= 992) {
			setIsOpen(false);
		}
	}, [windowWidth]); // tutaj używana

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	let navClasses =
		windowWidth >= 992 ? `${classes.nav} ${classes.desktop}` : classes.nav;
	if (isOpen) {
		navClasses = `${classes.nav} ${classes.show}`;
	}

	return (
		<div>
			<button
				className={`${classes.burger} ${isOpen ? classes.spin : ""}`}
				onClick={toggleMenu}
			>
				{isOpen ? "✕" : "☰"}
			</button>
			{/* Usuwam {isOpen && (<> ... </>)} */}
			<div className={classes.overlay} onClick={toggleMenu}></div>
			<nav className={navClasses}>
				<ul>
					<li>
						<a href="/">Strona główna</a>
					</li>
					<li>
						<a href="/about">O mnie</a>
					</li>
					<li>
						<a href="/price">Kursy</a>
					</li>
					<li>
						<a href="/price">Sklep</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default BurgerMenu;
