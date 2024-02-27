import classes from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__text}>
          <p className={classes.footer__textInfo}>
            &copy;<span class="footer__year"></span> The Nagas Journey{" "}
          </p>
        </div>
        <ul className={classes.footer__icons}>
          <li>
            <Link href="#">
              <i class="fab fa-facebook-f"></i>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
