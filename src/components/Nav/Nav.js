import Link from "next/link";
import classes from "./Nav.module.scss";

const Nav = ({ isOpen, toggleMenu, windowWidth }) => {
	
	let navClasses = classes.nav;

	if (isOpen && windowWidth < 992) {
		navClasses += ` ${classes.nav__show}`;
	}
	
	// Używanie klasy nav___desktop
	if (windowWidth >= 992) {
		navClasses += ` ${classes.nav___desktop}`;
	}

	console.log(isOpen);
	console.log(navClasses);
	console.log(classes);
	console.log("isOpen:", isOpen);
console.log("windowWidth:", windowWidth);

	
return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <div className={classes.nav__items}>
          <ul className={classes.menu}>
            <li>
              <Link href="/#hero">Strona główna</Link>
            </li>
            <li>
              <Link href="/AboutMe/about">O mnie</Link>
            </li>
            <li>
              <Link href="/#courses">Kursy</Link>
            </li>
            <li>
              <Link href="/#sessions">Sesje</Link>
            </li>
            <li className={classes.menuItem}>
              <Link href="/#shop">Sklep</Link>
            </li>
            <li className={`${classes.menuItem} ${classes.four}`}>
              <ul className={classes.dropdown}>
                <li>
                  <Link href="/Courses">Kursy</Link>
                </li>
                <li>
                  <Link href="/Sessions">Sesje</Link>
                </li>
                <li>
                  <Link href="/#shop">Sklep</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/#needContact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
