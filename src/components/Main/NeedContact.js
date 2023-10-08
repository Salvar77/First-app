import classes from './NeedContact.module.scss';
import Link from 'next/link';

const NeedConctact = () => {
	return (
		<section id="needContact">
			<div className={classes.contactMain}>
				<h2 className={classes.contactMain__header}>Jeśli potrzebujesz pomocy...!</h2>
				<p className={classes.contactMain__text}>...Skontaktuj się ze mną !</p>
				<Link href="/Contact/contactPage" className={classes.contactMain__btn}>Porozmawiajmy! :)</Link>
                <br></br>
			</div>
		</section>
	);
};

export default NeedConctact;
