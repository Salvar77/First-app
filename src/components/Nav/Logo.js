import classes from './Logo.module.css';

const Logo = () => {
  return (
    <img className={classes.logo} src="/logo.png" alt="Logo Firmy" />
  )
}

export default Logo;