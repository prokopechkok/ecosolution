import { Icon } from '../Icon/Icon';
import s from './ValuesTable.module.css';
import desktopWind from '../../assets/images/desktop-values-wind.jpg';
import desktopWind2x from '../../assets/images/desktop-values-wind@2x.jpg';
import desktopPanels from '../../assets/images/desktop-values-panels.jpg';
import desktopPanels2x from '../../assets/images/desktop-values-panels@2x.jpg';
import tabletWind from '../../assets/images/tablet-values-wind.jpg';
import tabletWind2x from '../../assets/images/tablet-values-wind@2x.jpg';
import tabletPanels from '../../assets/images/tablet-values-panels.jpg';
import tabletPanels2x from '../../assets/images/tablet-values-panels@2x.jpg';

const ValuesTable = ({ isTablet }) => {
  return (
    <ul className={s.list}>
      <li className={s.listItem}>
        <div className={s.titleWrapper}>
          <Icon id="maximize-circle" className={s.valueIcon} />
          <h3 className={s.valueTitle}>Openness</h3>
        </div>
        <p className={s.text}>to the world, people, new ideas and projects</p>
      </li>
      <li className={s.listItem}>
        <div className={s.titleWrapper}>
          <Icon id="global-edit" className={s.valueIcon} />
          <h3 className={s.valueTitle}>Responsibility</h3>
        </div>
        <p className={s.text}>
          we are aware that the results of our work have an impact on our lives
          and the lives of future generations
        </p>
      </li>
      {isTablet && (
        <>
          <li className={s.listItem}>
            <picture className={s.picture}>
              <source
                media="(min-width: 1280px)"
                srcSet={`${desktopWind}, ${desktopWind2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${tabletWind}, ${tabletWind2x} 2x`}
              />
              <img
                src={tabletWind}
                srcSet={`${tabletWind}, ${tabletWind2x} 2x`}
                alt="wind turbine"
                className={s.image}
              />
            </picture>
          </li>
          <li className={s.listItem}>
            <picture className={s.picture}>
              <source
                media="(min-width: 1280px)"
                srcSet={`${desktopPanels}, ${desktopPanels2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${tabletPanels}, ${tabletPanels2x} 2x`}
              />
              <img
                src={tabletPanels}
                srcSet={`${tabletPanels}, ${tabletPanels2x} 2x`}
                alt="wind turbine"
              />
            </picture>
          </li>
        </>
      )}
      <li className={s.listItem}>
        <div className={s.titleWrapper}>
          <Icon id="cpu-charge" className={s.valueIcon} />
          <h3 className={s.valueTitle}>Innovation</h3>
        </div>
        <p className={s.text}>
          we use the latest technology to implement non-standard solutions
        </p>
      </li>
      <li className={s.listItem}>
        <div className={s.titleWrapper}>
          <Icon id="ranking" className={s.valueIcon} />
          <h3 className={s.valueTitle}>Quality</h3>
        </div>
        <p className={s.text}>
          we do not strive to be the first among others, but we want to be the
          best in our business
        </p>
      </li>
    </ul>
  );
};

export default ValuesTable;
