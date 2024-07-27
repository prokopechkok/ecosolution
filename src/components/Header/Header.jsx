// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Icon } from '../Icon/Icon';
import s from './Header.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Logo from '../Logo/Logo';

export const Header = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsTablet(true);
    }

    const updateMedia = () => {
      if (window.innerWidth < 768) {
        setIsTablet(false);
      } else {
        setIsTablet(true);
      }
    };

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <header className={s.header}>
      <Logo />
      <div className={s.btnsWrapper}>
        <button type="button" className={s.burgerBtn}>
          <Icon className={s.burgerIcon} id="menu" />
        </button>
        {isTablet && (
          <Link to="contactUs" smooth={true} duration={500}>
            <button type="button" className={s.getInTouchBtn}>
              Get in touch
              <div className={s.dotIcon}></div>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};
