import { useState, useEffect } from "react";
import Nav from "./Nav";
import classes from "./BurgerMenu.module.scss";
import Link from "next/link";
import Image from "next/image";


const BurgerMenu = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive(!isActive);
	};
	const [isOpen, setIsOpen] = useState(false);

	const [windowWidth, setWindowWidth] = useState("");
	useEffect(() => {
		setWindowWidth(window.innerWidth);
		const handleResizeWindow = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button
			className={`hamburger hamburger--spring ${isActive ? "is-active" : ""}`}
				type="button"
				onClick={toggleActive}
			>
				<span className={classes.hamburgerBox}>
					<span className={classes.hamburgerInner}></span>
				</span>
			</button>

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
