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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logika przetwarzania formularza
  };

  return (
    <>
      <div id="contactPage" className={styles.contactSection}>
        <Image
          src={currentImage}
          alt="Tło sekcji Kontakt"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
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
            Wyślij
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
