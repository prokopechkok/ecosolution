import { Icon } from '../Icon/Icon';
import Logo from '../Logo/Logo';
import s from './Footer.module.css';
import { Link } from 'react-scroll';
import Address from '../Address/Address';
import { useState } from 'react';
import { useEffect } from 'react';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

const Footer = () => {
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
    <footer className={s.footer}>
      <div className={s.logoRow}>
        <div className={s.logoColumn}>
          <Logo />
          <SocialNetworks size="24px" />
        </div>
        <Link className={s.circle} to="main" smooth={true} duration={500}>
          <Icon className={s.btnIcon} id="arrow-up" />
        </Link>
      </div>
      <div className={s.adress}>
        <Address isTablet={isTablet} gap="16px" />
        {!isTablet && <p className={s.copyright}>ecosolution &#169; 2023</p>}
      </div>
    </footer>
  );
};

export default Footer;
