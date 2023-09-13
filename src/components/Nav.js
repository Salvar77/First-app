import classes from "./Nav.module.css";

const Nav = ({ isOpen, toggleMenu, windowWidth }) => {
	
	let navClasses =
		windowWidth >= 992 ? `${classes.nav} ${classes.desktop}` : classes.nav;
	if (isOpen) {
		navClasses = `${classes.nav} ${classes.show}`;
	}

	return (
		<div>
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
						<a href="/courses">Kursy</a>
					</li>
					<li>
						<a href="/shop">Sklep</a>
					</li>
					<li>
						<a href="/contact">Kontakt</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
