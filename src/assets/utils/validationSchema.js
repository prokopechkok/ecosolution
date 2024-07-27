import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/)
    .required('Enter valid full name'),
  email: Yup.string().email('Not valid email').required('Email required'),
  phone: Yup.string()
    .matches(/^[0-9]{12}$/)
    .required('Phone number is required'),
  message: Yup.string(),
});
