import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Hero.module.scss";
import heroImageMobile from "../../assets/image/dragon_640.jpg";
import heroImageDesktop from "../../assets/image/dragon_1920.jpg";

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState(heroImageMobile);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:992px)");

    const handleMediaQueryChange = (e) => {
      setBackgroundImage(e.matches ? heroImageDesktop : heroImageMobile);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const heroSection = document.getElementById("hero");
      const viewportHeight = window.innerHeight;
      heroSection.style.height = `${viewportHeight}px`;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hero" className={classes.hero}>
      <div>
        <Image
          src={backgroundImage} // Dynamicznie zmieniające się źródło obrazu
          alt="Tło sekcji O mnie"
          layout="fill"
          objectFit="cover"
          quality={100} // Możesz dostosować jakość obrazu
          priority
        />
      </div>
      <div className={classes.hero__background}></div>{" "}
      {/* Tutaj dodajemy zamknięcie tagu */}
      <div className={classes.textOverlay}>
        <h1 className={classes.hero__title}>The Nagas Journey</h1>
        <p>Posążki ozdobne / Koszulki: Nagowie</p>
        <Link href="#sessions" className={classes.btn}>
          <i className={classes.animation}></i>
          &#10132;
          <i className={classes.animation}></i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
