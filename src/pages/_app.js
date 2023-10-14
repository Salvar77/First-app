import Footer from "@/components/footer/Footer";
import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import BurgerMenu from "../components/Nav/BurgerMenu";
import Logo from "@/components/Nav/Logo";
import Hero from "@/components/Main/Hero";
import AdditionalSection from "./AdditionalSection/AdditionalSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<header>
				<Logo />
				<BurgerMenu />
			</header>
			<Hero />
			<main>
				<Component {...pageProps} />
			</main>
			<AdditionalSection />
			<Footer />
		</>
	);
}
