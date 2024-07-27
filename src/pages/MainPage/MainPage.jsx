import { useState } from 'react';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Cases from '../../components/Cases/Cases';
import ContactUs from '../../components/ContactUs/ContactUs';
import Electricity from '../../components/Electricity/Electricity';
import Main from '../../components/Main/Main';
import Questions from '../../components/Questions/Questions';
import Values from '../../components/Values/Values';
import { useEffect } from 'react';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  // const [isDesktop, setIsDesktop] = useState(false);

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
    <div>
      <Main setIsOpen={setIsOpen} />
      <Values isTablet={isTablet} />
      <Electricity />
      <Cases />
      <Questions />
      <ContactUs />
      {isOpen && <BurgerMenu />}
    </div>
  );
};

export default MainPage;
