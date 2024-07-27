import s from './Values.module.css';
import desktopHero from '../../assets/images/desktop-wind-hero.jpg';
import desktopHero2x from '../../assets/images/desktop-wind-hero@2x.jpg';
import tabletHero from '../../assets/images/tablet-wind-hero.jpg';
import tabletHero2x from '../../assets/images/tablet-wind-hero@2x.jpg';
import mobileHero from '../../assets/images/mobile-wind-hero.jpg';
import mobileHero2x from '../../assets/images/mobile-wind-hero@2x.jpg';
import ValuesTable from '../ValuesTable/ValuesTable';
import Address from '../Address/Address';

const Values = ({ isTablet }) => {
  return (
    <section className={s.section}>
      <Address isTablet={isTablet} />
      <picture className={s.picture}>
        <source
          media="(min-width: 1280px)"
          srcSet={`${desktopHero}, ${desktopHero2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${tabletHero}, ${tabletHero2x} 2x`}
        />
        <img
          src={mobileHero}
          srcSet={`${mobileHero}, ${mobileHero2x} 2x`}
          alt="Wind turbine - clean energy"
          className={s.image}
        />
      </picture>

      <div className={s.description}>
        <h2 className={s.title}>
          Main values of our <br className={s.break} />
          company
        </h2>
        <p className={s.text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&apos;s energy needs.
        </p>
      </div>

      <ValuesTable isTablet={isTablet} />
    </section>
  );
};

export default Values;
