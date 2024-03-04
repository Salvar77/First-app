import Link from "next/link";
import classes from "./Nav.module.scss";
import MenuIcons from "./MenuIcons";

const Nav = ({ isOpen, toggleMenu, toggleShopCart, shopCart }) => {
  let navClasses = classes.nav;

  if (isOpen) {
    navClasses = `${classes.nav} ${classes.nav__show}`;
  }

  console.log(navClasses, isOpen);

  return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <div className={classes.nav__items}>
          <ul aria-hidden onClick={toggleMenu} className={classes.menu}>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="/#AboutMe">Nagowie</Link>
            </li>
            <li>
              <Link href="/#sessions">Sklep NGE</Link>
            </li>
            <li>
              <Link href="/#courses">Koszulki NGE</Link>
            </li>

            <li className={`${classes.menuItem} ${classes.four}`}>
              <p>Sklep</p>
              <ul className={classes.dropdown}>
                <li>
                  <Link href="/Sessions/sessions1">Posążki</Link>
                </li>
                <li>
                  <Link href="/Courses/courses1">Koszulki</Link>
                </li>
                <li>
                  <Link href="/Courses/courses1">Sklep</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/#needContact">Kontakt</Link>
            </li>
          </ul>
        </div>
        <MenuIcons toggleShopCart={toggleShopCart} shopCart={shopCart} />
      </div>
    </nav>
  );
};

export default Nav;
