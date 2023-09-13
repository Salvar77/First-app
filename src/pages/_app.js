import { Fragment } from "react";
import "@/styles/globals.css";
import BurgerMenu from "../components/BurgerMenu";
import Logo from "@/components/Logo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<header>
				<Logo />
				<BurgerMenu />
			</header>
			<Component {...pageProps} />
		</>
	);
}
