import classes from "../Nav/MenuIcons.module.scss";
import Link from "next/link";
import Image from "next/image";

const MenuIcons = ({ toggleShopCart, mobile }) => {

const containerClass = mobile ? classes.rightIconsMobile : classes.rightIcons;

	return (
		<div className={containerClass}>
			<button className={classes.links} onClick={toggleShopCart}>
				<Image src="/shopping-cart.svg" alt="Koszyk" width={24} height={24} className={classes.icon} />
			</button>
			<Link href="/account" className={classes.links}>
				<Image src="/account-person.svg" alt="Profil" width={24} height={24} />
			</Link>
		</div>
	);
};

export default MenuIcons;
