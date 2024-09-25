import clsx from 'clsx';
import { Icon } from '../Icon/Icon';
import s from './SocialNetworks.module.css';

const SocialNetworks = ({ size }) => {
  return (
    <ul className={clsx(s.networksList)}>
      <li className={s.network} style={{ width: `${size}`, height: `${size}` }}>
        <Icon id="facebook" className={clsx(s.icon, s.networkIcon)} />
      </li>
      <li className={s.network}>
        <Icon id="instagram" className={s.icon} />
      </li>
    </ul>
  );
};

export default SocialNetworks;
