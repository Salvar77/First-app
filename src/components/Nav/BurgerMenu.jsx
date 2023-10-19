import { useState, useEffect } from "react";
import Nav from "./Nav";
import MenuIcons from "./MenuIcons";
import classes from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
	const [shopCart, setShopCart] = useState(false);

	const toggleShopCart = () => {
		setShopCart(!shopCart);
		
	};
	const [isActiveMenu, setIsActiveMenu] = useState(false);

	const toggleActive = () => {
		setIsActiveMenu(!isActiveMenu);
		setIsOpen(!isOpen);
	};

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const [windowWidth, setWindowWidth] = useState("");
	useEffect(() => {
		setWindowWidth(window.innerWidth);
		const handleResizeWindow = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	return (
		<>
			<div className={classes.hamburgerContainer}>
				<button
					className={`${classes.hamburger} ${classes.hamburger__arrow} ${
						isActiveMenu ? classes.isActive : ""
					}`}
					type="button"
					onClick={toggleActive}
				>
					<span className={classes.hamburgerBox}>
						<span className={classes.hamburgerInner}></span>
					</span>
				</button>
				
			</div>

			{/* Usuwam {isOpen && (<> ... </>)} */}
			<Nav
				isOpen={isOpen}
				toggleMenu={toggleMenu}
				toggleShopCart={toggleShopCart}
				shopCart={shopCart}
				windowWidth={windowWidth}
			/>
		</>
	);
};

export default BurgerMenu;
