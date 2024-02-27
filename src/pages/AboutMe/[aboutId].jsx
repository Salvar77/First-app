import Image from "next/image";
import AboutMePicture from "../../assets/image/King.jpg";
import styles from "../AboutMe/AboutMe.module.scss";

const AboutMe = () => {
  return (
    <>
      <section id="about" className={styles.aboutMe}>
        <div>
          <Image src={AboutMePicture} className={styles.aboutMe__img} alt="" />
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
