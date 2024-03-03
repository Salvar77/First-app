import Image from "next/image";
import styles from "../Main/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="AboutMe" className={styles.aboutMe}>
        <div>
          <Image
            className={styles.aboutMe__img}
            src="/King.jpg"
            alt="Opis obrazu"
            width={500}
            height={300}
          />
        </div>
        <div className={styles.aboutMe__boxText}>
          <h2 className={styles.sectionHeading}>
            Kim są Nagowie według mitologii?
          </h2>
          <p className={styles.aboutMe__info}>
            Nagowie w indyjskiej mitologii to niebezpieczne demony, którzy
            mieszkali w podziemnym świecie nazywanym Patala, byli to półludzie
            (od pasa w górę) półwęże (od pasa w dół), uważana przez Aryjczyków
            za półbogów. Posągi z nimi są nadal otaczane kultem w południowych
            Indiach i ustawiane pod drzewami. W rejonie tych panuje przekonanie,
            że ów jadowici oszuści są przyjaźni dla ludzi, pod warunkiem, że nie
            niwelują im planów, natomiast jeśli kogoś sobie upodobają to mogą
            ofiarować mu somę, która daje pijącemu wielką siłę. Córki nagów
            trudno było odróżnić od zwyczajnych kobiet, np. Ulupi, która wyszła
            za mąż za bohaterskiego Ardżunę. Nagowie byli potomkami Kadru (żony
            mędrca Jasjapy), a królował im wąż Ananta-Siesza, który posiadał
            siedem lub tysiąc głów i ochraniał boga Wisznu podczas jego
            kosmicznego snu. Natomiast w Ramajanie Ananta-Siesza jest ukazany
            jako Rawana czyli demoniczny władca złych rakszasów. Małpi bóg
            Hanuman pokonał jednego z nagów Naga-hag Surasę.
          </p>
          <Link href="/AboutMe/about" className={styles.btn}>
            <i className={styles.animation}></i>
            Zobacz
            <i className={styles.animation}></i>
          </Link>
          <div className={styles.links}>
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
              href="https://www.instagram.com/twojaNazwaUzytkownika/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
