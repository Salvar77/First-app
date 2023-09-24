import classes from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer__container}>
				<p className={classes.footer__text}>
					<p className={classes.footer__textInfo}>
						&copy;<span class="footer__year"></span> Tarot, Duchowość, Coaching{" "}
					</p>
				</p>
				<ul className={classes.footer__icons}>
					<li>
						<a href="#">
							<i class="fab fa-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fab fa-linkedin-in"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fab fa-instagram"></i>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
