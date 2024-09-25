// import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import s from './Main.module.css';
import { Link } from 'react-scroll';

const Main = () => {
  return (
    <section className={s.section} id="main">
      <h1 className={s.title}>
        RENEWABLE ENERGY <br className={s.breakFor} />
        For <br className={s.breakAny} />
        any task
      </h1>

      <div className={s.column}>
        <p className={s.text}>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
        <Link to="cases" smooth={true} duration={500}>
          <button type="button" className={s.link}>
            Learn more
            <div className={s.circle}>
              <Icon className={s.btnIcon} id="arrow-right" />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Main;
