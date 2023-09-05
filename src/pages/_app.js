import { Fragment } from "react";
import "@/styles/globals.css";
import BurgerMenu from "../components/BurgerMenu";
import Logo from "@/components/Logo";

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
