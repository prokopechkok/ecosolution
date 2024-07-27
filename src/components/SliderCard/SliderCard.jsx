import { Icon } from '../Icon/Icon';
import s from './SliderCard.module.css';

const SliderCard = ({ case: item }) => {
  const { src, src2x, name, descr, date, navigateTo } = item;
  return (
    <div className={s.sliderCard}>
      <img src={src} srcSet={`${src}, ${src2x} 2x`} alt={name} />
      <div className={s.text}>
        <div className={s.nameWrapper}>
          <h3 className={s.name}>{name}</h3>
          <a href={navigateTo} className={s.btn}>
            <Icon id="arrow-right-up" className={s.icon} />
          </a>
        </div>
        <div className={s.info}>
          <p>{descr}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
