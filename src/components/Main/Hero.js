// import pattern from '../../assets/image/pattern.svg';
import Link from "next/link";
import classes from "./Hero.module.scss";
// import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.textOverlay}>
        <h1 className={classes.hero__title}>The Nagas Journey</h1>
        <p>Posążki ozdobne / Koszulki: Nagowie</p>
        <Link href="#courses" className={classes.button}>
          &#10132;
        </Link>
      </div>
    </section>
  );
};

export default Hero;
