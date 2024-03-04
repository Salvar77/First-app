import classes from "./Logo.module.css";
import Image from "next/image";
import logo from "../../assets/image/logo.svg";

const Logo = () => {
  return <Image className={classes.logo} src={logo} alt="Logo Firmy" />;
};

export default Logo;
