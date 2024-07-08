import { useState } from 'react';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Cases from '../../components/Cases/Cases';
import ContactUs from '../../components/ContactUs/ContactUs';
import Electricity from '../../components/Electricity/Electricity';
import Main from '../../components/Main/Main';
import Questions from '../../components/Questions/Questions';
import Values from '../../components/Values/Values';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Main setIsOpen={setIsOpen} />
      <Values />
      <Electricity />
      <Cases />
      <Questions />
      <ContactUs />
      {isOpen && <BurgerMenu />}
    </div>
  );
};

export default MainPage;
