import { cases } from '../../assets/data/cases';
import Slider from 'react-slick';
import SliderCard from '../SliderCard/SliderCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import s from './Cases.module.css';
import { Icon } from '../Icon/Icon';

const Cases = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      setSlidesToShow(width >= 768 ? 2 : 1);
    };

    window.addEventListener('resize', updateSlidesToShow);
    updateSlidesToShow();

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  return (
    <section id="cases" className={s.section}>
      <div className={s.wrapperHeader}>
        <h2 className={s.title}>Successful cases of our company</h2>
        <div className={s.header}>
          <p className={s.casesCounter}>
            <span>{`0${currentSlide + 1} `}</span>
            <span className={s.casesTotal}>
              {cases.length < 10 ? `/0${cases.length}` : `/${cases.length}`}
            </span>
          </p>
          <div className={s.buttonsWrap}>
            <button
              type="button"
              className={s.btn}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <Icon id="arrow-left-big" className={s.sliderIcon} />
            </button>
            <button
              type="button"
              className={s.btn}
              onClick={() => sliderRef.current.slickNext()}
            >
              <Icon id="arrow-right-big" className={s.sliderIcon} />
            </button>
          </div>
        </div>
      </div>
      <div className={s.sliderWrapper}>
        <Slider ref={sliderRef} {...settings} className={s.slider}>
          {cases.map((item, index) => (
            <SliderCard key={index} case={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Cases;
