import Footer from "@/components/footer/Footer";
import "@/styles/globals.scss";
import BurgerMenu from "../components/Nav/BurgerMenu";
import Logo from "@/components/Nav/Logo";
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
			<Footer />
		</>
	);
}
