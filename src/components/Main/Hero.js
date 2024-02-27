import Link from "next/link";
import { useState, useEffect } from "react";
import classes from "./Hero.module.scss";

// Przykładowe importy obrazów tła
import heroImageMobile from "../../../public/dragon_640.jpg";
import heroImageDesktop from "../../../public/dragon_1920.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(heroImageMobile);

  useEffect(() => {
    const updateBackgroundAndHeight = () => {
      const mediaQuery = window.matchMedia("(min-width: 992px)");
      setCurrentImage(mediaQuery.matches ? heroImageDesktop : heroImageMobile);

      const heroSection = document.getElementById("hero");
      const viewportHeight = window.innerHeight;
      heroSection.style.height = `${viewportHeight}px`;
    };

    updateBackgroundAndHeight(); // Wywołaj przy montowaniu komponentu

    window.addEventListener("resize", updateBackgroundAndHeight);

    return () => {
      window.removeEventListener("resize", updateBackgroundAndHeight);
    };
  }, []);

  return (
    <section
      id="hero"
      className={classes.hero}
      style={{ backgroundImage: `url(${currentImage})` }}
    >
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
