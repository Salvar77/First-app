import Link from "next/link";
import classes from "./Nav.module.css";

const Nav = ({ isOpen, toggleMenu, windowWidth }) => {
	let navClasses =
		windowWidth >= 992 ? `${classes.nav} ${classes.desktop}` : classes.nav;
	if (isOpen) {
		navClasses = `${classes.nav} ${classes.show}`;
	}

	return (
		<div>
			<div className={isOpen ? classes.overlay : ''} onClick={toggleMenu}></div>
			<nav className={navClasses} onClick={(e) => e.stopPropagation()}>
				<ul>
					<li>
						<Link href="/#hero">Strona główna</Link>
					</li>
					<li>
						<Link href="/#aboutMe">O mnie</Link>
					</li>
					<li>
						<Link href="/#courses">Kursy</Link>
					</li>
					<li>
						<Link href="/#shop">Sklep</Link>
					</li>
					<li>
						<Link href="/#contact">Kontakt</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
