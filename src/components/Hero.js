import { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './Hero.module.scss';


const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.hero}>
      
      <div className={classes.textOverlay}>
        <h1>Tarot, Duchowość, Coaching</h1>
        <p>Pomagam zrozumieć i zmienić doświadczanie własnej rzeczywistości ✨</p>
        <a className={classes.button}>
								Kursy
							</a>
      </div>
    </div>
  );
};

export default Hero;





