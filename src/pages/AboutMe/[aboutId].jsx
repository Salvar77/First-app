import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../AboutMe/AboutMe.module.scss";
import AboutMePicture from "../../assets/image/King.jpg";
import heroImageMobile from "../../assets/image/dragon_640.jpg";
import heroImageDesktop from "../../assets/image/dragon_1920.jpg";

const AboutMe = () => {
  const [currentImage, setCurrentImage] = useState(heroImageMobile);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");

    const handleMediaQueryChange = (e) => {
      setCurrentImage(e.matches ? heroImageDesktop : heroImageMobile);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const heroSection = document.getElementById("about");
      const viewportHeight = window.innerHeight;
      heroSection.style.height = `${viewportHeight}px`;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className={styles.background}>
        <Image
          src={currentImage} // Dynamicznie zmieniające się źródło obrazu
          alt="Tło sekcji O mnie"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <section id="about" className={styles.aboutMe}>
        <div className={styles.aboutMe__image}>
          <Image
            src={AboutMePicture}
            className={styles.aboutMe__img}
            alt="Nagowie"
          />
        </div>
        <div className={styles.aboutMe__content}>
          <div className={styles.aboutMe__box}>
            <h2 className={styles.aboutMe__header}>Kim są Nagowie?</h2>
            <p className={styles.aboutMe__text}>
              Nagowie w indyjskiej mitologii to niebezpieczne demony, którzy
              mieszkali w podziemnym świecie nazywanym Patala, byli to półludzie
              (od pasa w górę) półwęże (od pasa w dół), uważana przez Aryjczyków
              za półbogów. Posągi z nimi są nadal otaczane kultem w południowych
              Indiach i ustawiane pod drzewami. W rejonie tych panuje
              przekonanie, że ów jadowici oszuści są przyjaźni dla ludzi, pod
              warunkiem, że nie niwelują im planów, natomiast jeśli kogoś sobie
              upodobają to mogą ofiarować mu somę, która daje pijącemu wielką
              siłę. Córki nagów trudno było odróżnić od zwyczajnych kobiet, np.
              Ulupi, która wyszła za mąż za bohaterskiego Ardżunę. Nagowie byli
              potomkami Kadru (żony mędrca Jasjapy), a królował im wąż
              Ananta-Siesza, który posiadał siedem lub tysiąc głów i ochraniał
              boga Wisznu podczas jego kosmicznego snu. Natomiast w Ramajanie
              Ananta-Siesza jest ukazany jako Rawana czyli demoniczny władca
              złych rakszasów. Małpi bóg Hanuman pokonał jednego z nagów
              Naga-hag Surasę.
            </p>
          </div>

          <div className={styles.aboutMe__boxLinks}>
            <a
              href="https://www.youtube.com/user/TwojaNazwaUzytkownika"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/TwojaNazwaUzytkownika"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/nazwa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
