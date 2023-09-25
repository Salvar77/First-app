import classes from './NeedContact.module.scss';

const NeedConctact = () => {
	return (
		<section id="needContact">
			<div className={classes.contactMain}>
				<h2 className={classes.contactMain__header}>Jeśli potrzebujesz pomocy...!</h2>
				<p className={classes.contactMain__text}>...Skontaktuj się ze mną !</p>
				<a href="#contact" className={classes.contactMain__btn}>Porozmawiajmy! :)</a>
                <br></br>
			</div>
		</section>
	);
};

export default NeedConctact;
