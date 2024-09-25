import { Icon } from '../Icon/Icon';
import s from './ContactsInfo.module.css';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

const ContactsInfo = () => {
  return (
    <ul className={s.contactsList}>
      <li className={s.contactsListItem}>
        <h3 className={s.label}>Phone:</h3>
        <ul className={s.phoneList}>
          <li className={s.phoneListItem}>
            <Icon id="call" className={s.icon} />
            <a href="tel:+380981234567" className={s.text}>
              38 (098) 12 34 567
            </a>
          </li>
          <li className={s.phoneListItem}>
            <Icon id="call" className={s.icon} />
            <a href="tel:+380931234567" className={s.text}>
              38 (093) 12 34 567
            </a>
          </li>
        </ul>
      </li>
      <li className={s.contactsListItem}>
        <h3 className={s.label}>E-mail:</h3>
        <div className={s.contact}>
          <Icon id="sms" className={s.icon} />
          <a href="mailto:office@ecosolution.com" className={s.text}>
            office@ecosolution.com
          </a>
        </div>
      </li>
      <li className={s.contactsListItem}>
        <h3 className={s.label}>Address:</h3>
        <div className={s.contact}>
          <Icon id="map" className={s.icon} />
          <address>
            <a
              href="https://www.google.com.ua/maps/place/%D1%83%D0%BB.+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8315971,24.0300057,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0YPQuy4g0KjQvtGC0LAg0KDRg9GB0YLQsNCy0LXQu9C4LCA30JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMCA!3m6!1s0x473add6793de3b25:0xf796db4d26cfc46!8m2!3d49.8315937!4d24.0346191!15sCljRg9C7LiDQqNC-0YLQsCDQoNGD0YHRgtCw0LLQtdC70LgsIDfQm9GM0LLQvtCyLCDQm9GM0LLQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDc5MDAwkgEFcm91dGXgAQA!16s%2Fg%2F122c1f5q?entry=ttu"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={s.text}
            >
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </address>
        </div>
      </li>
      <li className={s.contactsListItem}>
        <h3 className={s.label}>Social Networks:</h3>

        <SocialNetworks size="48px" />
      </li>
    </ul>
  );
};

export default ContactsInfo;
