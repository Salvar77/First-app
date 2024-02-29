import { useState, useEffect } from "react";
import Link from "next/link";
import classes from "./Hero.module.scss";

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState("/dragon_640.jpg"); // Start with the mobile image

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    const handleChange = (e) => {
      setBackgroundImage(e.matches ? "/dragon_1920.jpg" : "/dragon_640.jpg");
    };

    mediaQuery.addEventListener("change", handleChange); // Dodaj listener
    handleChange(mediaQuery); // Wywołaj na początku, aby ustawić odpowiedni obraz

    return () => mediaQuery.removeEventListener("change", handleChange); // Oczyść po unmount
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    // ... inne style które chcesz dodać
  };

  return (
    <section id="hero" className={classes.hero}>
      <div
        className={classes.hero__background}
        style={backgroundImageStyle}
      ></div>{" "}
      {/* Tutaj dodajemy zamknięcie tagu */}
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
