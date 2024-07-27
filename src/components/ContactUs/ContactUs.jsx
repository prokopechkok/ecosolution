import ContactForm from '../ContactForm/ContactForm';
import ContactsInfo from '../ContactsInfo/ContactsInfo';
import s from './ContactUs.module.css';
const ContactUs = () => {
  return (
    <section id="contactUs" className={s.section}>
      <h2 className={s.title}>Contact us</h2>
      <div className={s.wrapper}>
        <ContactsInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
