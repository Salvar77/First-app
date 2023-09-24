import { useState, useEffect } from "react";
import Nav from "./Nav";
import classes from "./BurgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";

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

	return (
		<div>
			<button
				className={`${classes.burger} ${isOpen ? classes.spin : ""}`}
				onClick={toggleMenu}
			>
				{isOpen ? "✕" : "☰"}
			</button>
			<div className={classes.rightIcons}>
				<Link href="/shop">
					<Image src="/shopping-cart.svg" alt="Koszyk" width={24} height={24} />
				</Link>
				<Image src="/account-person.svg" alt="Profil" width={24} height={24} />
			</div>

			{/* Usuwam {isOpen && (<> ... </>)} */}
			<Nav isOpen={isOpen} toggleMenu={toggleMenu} windowWidth={windowWidth} />
		</div>
	);
};

export default BurgerMenu;
