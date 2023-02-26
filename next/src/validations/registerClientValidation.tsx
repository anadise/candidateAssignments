import * as Yup from 'yup';

export const REGISTER_CLIENT_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email('Email Address should be a valid email.')
    .max(50, 'Email must be less then 50 characters.')
    .required('Email Address is mandatory.'),
  firstName: Yup.string()
    .required('First name is mandatory.'),
  lastName: Yup.string()
    .required('Last name is mandatory.'),
  fileUpload: Yup.string()
    .required('File upload is mandatory.'),
  supportTier: Yup.string()
    .required('Support Tier is mandatory.'),
  hourlyRate: Yup.number()
    .required('Hourly rate is mandatory.'),
  gender: Yup.string()
    .required('Gender is mandatory.'),
});
