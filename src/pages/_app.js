import Footer from "@/components/footer/Footer";
import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import Logo from "@/components/Nav/Logo";

import AdditionalSection from "./AdditionalSection/AdditionalSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = document.documentElement.scrollTop;
      const windowWidth = window.innerWidth;

      setShowLogo(!(windowWidth < 922 && currentScrollPos > 200));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <header>
        <Logo showLogo={showLogo} />
        <BurgerMenu />
      </header>

      <Component {...pageProps} />

      <AdditionalSection />
      <Footer />
    </>
  );
}
