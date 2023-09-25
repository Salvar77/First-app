import classes from "./Sessions.module.scss";
import Image from "next/image";

const Sessions = () => {
	return (
		<section id="sessions" className={classes.sessions}>
			<h2>Sesje TDC</h2>
			<br></br>
			<div className={classes.sessions__box}>
				<div >
					<div>
						<Image
							className={classes.sessions__img}
							src="/sessions-1.jpg"
							alt="Opis grafiki"
							width={500}
							height={300}
						></Image>
					</div>
					<div>
						<p className={classes.sessions__text}>Sesja Online</p>
						<button className={classes.sessions__btn}>Dodaj do koszyka</button>
					</div>
					<br></br>
				</div>
				<div >
					<div>
						<Image
							className={classes.sessions__img}
							src="/sessions-1.jpg"
							alt="Opis grafiki"
							width={500}
							height={300}
						></Image>
					</div>
					<div>
						<p className={classes.sessions__text}>Sesja Całościowa</p>
						<button className={classes.sessions__btn}>Dodaj do koszyka</button>
					</div>
					<br></br>
				</div>
				<div >
					<div>
						<Image
							className={classes.sessions__img}
							src="/sessions-1.jpg"
							alt="Opis grafiki"
							width={500}
							height={300}
						></Image>
					</div>
					<div>
						<p className={classes.sessions__text}>Sesja Odczyt Kart Tarota</p>
						<button className={classes.sessions__btn}>Dodaj do koszyka</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sessions;
