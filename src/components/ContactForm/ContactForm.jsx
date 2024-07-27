import { useFormik } from 'formik';
import { validationSchema } from '../../assets/utils/validationSchema';
import s from './ContactForm.module.css';
import clsx from 'clsx';
import { Icon } from '../Icon/Icon';

const ContactForm = () => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isSubmitting,
    resetForm,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        * Full name:
        <input
          type="text"
          name="name"
          required
          placeholder="John Rosie"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          // errors={touched.name && errors?.name}
          className={s.input}
        />
        {touched.name && errors?.name && <p>Wrong Fullname</p>}
      </label>
      <label className={s.label}>
        * E-mail:
        <input
          type="email"
          name="email"
          required
          placeholder="johnrosie@gmail.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className={s.input}
        />
        {touched.email && errors?.email && <p>Wrong Email</p>}
      </label>
      <label className={s.label}>
        * Phone:
        <input
          type="tel"
          name="phone"
          required
          placeholder="380961234567"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
          className={s.input}
        />
        {touched.phone && errors?.phone && <p>Wrong Phone</p>}
      </label>
      <label className={clsx(s.label, s.textlabel)}>
        Message:
        <textarea
          name="message"
          placeholder="Your message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          className={clsx(s.input, s.textarea)}
        ></textarea>
      </label>
      <button type="submit" disabled={isSubmitting} className={s.btn}>
        Send
        <div className={s.circle}>
          <Icon className={s.btnIcon} id="arrow-right" />
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
