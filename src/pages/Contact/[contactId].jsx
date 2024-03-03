import styles from "./ContactPage.module.scss";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import heroImageMobile from "../../assets/image/dragon_640.jpg";
import heroImageDesktop from "../../assets/image/dragon_1920.jpg";

const contactData = [
  { type: "Ulica", value: "Opolska" },
  { type: "Miasto", value: "Opole" },
  { type: "Telefon", value: "123456789" },
  { type: "Email", value: "email@gmail.com" },
];

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentImage, setCurrentImage] = useState(heroImageMobile);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
      const heroSection = document.getElementById("contactPage");
      const viewportHeight = window.innerHeight;
      heroSection.style.height = `${viewportHeight}px`;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div>
        <Image
          src={currentImage} // Dynamicznie zmieniające się źródło obrazu
          alt="Tło sekcji O mnie"
          layout="fill"
          objectFit="cover"
          quality={100} // Możesz dostosować jakość obrazu
          priority
        />
      </div>
      <section id="contactPage" className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h2>Kontakt</h2>
          {contactData.map((data, index) => (
            <p key={index}>
              <strong>{data.type}:</strong> {data.value}
            </p>
          ))}
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h2 className={styles.contactForm__header}>Wyślij wiadomość</h2>
          <input
            type="text"
            placeholder="Twoje imię"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Twój email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Twoja wiadomość"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className={styles.btn}>
            <i className={styles.animation}></i>
            Wyślij
            <i className={styles.animation}></i>
          </button>
        </form>
      </section>
      <div className={styles.textMe}>
        <h2>Napisz do mnie</h2>
        <a
          href="https://www.gmail.com/TwojaNazwaUzytkownika"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <p>lukaszkus77@gmail.com</p>
      </div>
    </>
  );
};

export default ContactPage;
