import styles from "./ContactPage.module.scss";
import React, { useState } from "react";

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

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
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
					<h2>Wyślij wiadomość</h2>
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
					<button type="submit">Wyślij</button>
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
					<p>juliaszagdaj@wp.pl</p>
                    <a
						href="https://www.instagram.com/moon.julu88/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-instagram"></i>
					</a>
					<p>moon.julu88</p>
				</div>
		</>
	);
};

export default ContactPage;
