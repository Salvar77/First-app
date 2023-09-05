import classes from './Logo.module.css';

const Logo = (params) => {
  return (
    <img className={classes.logo} src="/logo.png" alt="Logo Firmy" />
  )
}

export default Logo;