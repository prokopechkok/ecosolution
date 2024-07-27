import { Icon } from '../Icon/Icon';
import s from './Logo.module.css';
const Logo = () => {
  return (
    <div className={s.logoBlock}>
      <Icon className={s.logoIcon} id="logo" />
      <span className={s.eco}>ecosolution</span>
      <div className={s.greenergy}>
        <span>GREEN</span>ERGY
        <br />
        FOR LIFE
      </div>
    </div>
  );
};

export default Logo;
