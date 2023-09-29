import classes from "./Sessions.module.scss";
import Image from "next/image";
import Link from "next/link";

export const sessionsData = [
	{
		id: "sessions1",
		image: "/sessions-2.jpg",
		description:
			"Jeśli jesteś gotów na poznanie siebie, na pracę nad soba, na wiedzę, na temat tego co znajduje się w Twoim polu, aby posiadać wygląd, we własne możliwości, potencjał który jest na wyciągnięcie Twojej ręki, lub blokady, które należy usunąć, to czytanie jest idealne dla CIEBIE✨	",
		title: "Sesja Online",
		amount: "200",
	},
	{
		id: "sessions2",
		image: "/sessions-1.jpg",
		description: "GLOW ENERGETYCZNY TO 1,5H GODZINNY TRANS DO SIEBIE",
		title: "Sesja Całościowa",
		amount: "400",
	},
	{
		id: "sessions3",
		image: "/sessions-3.jpg",
		description:
			"Wiele osób pyta mnie o cennik, który mam w zakładce na profilu ale dla ułatwienia wstawiam go jeszcze w formie posta. Korzystajcie👀",
		title: "Sesja Odczyt Kart Tarota",
		amount: "600",
	},
];

const Sessions = () => {
	return (
		<section id="sessions" className={classes.sessions}>
			<h2 className={classes.sessions__container}>Sesje TDC</h2>

			<div className={classes.sessions__wrapper}>
			{sessionsData.map((session) => (
				<div key={session.id} className={classes.sessions__box}>
					<Image
						className={classes.sessions__img}
						src={session.image}
						alt="Opis grafiki"
						width={500}
						height={300}
					/>
					<div>
						<p className={classes.sessions__text}>{session.title}</p>
						<Link
							href={`/Sessions/${session.id}`}
							className={classes.sessions__btn}
						>
							Dodaj do koszyka
						</Link>
					</div>
				</div>
			))}
		</div>
		</section>
	);
};

export default Sessions;
