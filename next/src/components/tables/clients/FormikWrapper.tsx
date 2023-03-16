import { useRef, FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormikForm from 'components/common/form';
import { IValues } from 'types';

const initialValues: IValues = {
  username: '',
  about: '',
  photo: undefined,
  coverPhoto: undefined,
  firstName: '',
  lastName: '',
  email: '',
  country: 'China',
  address: '',
  city: '',
  state: '',
  zip: '',
  emailNotification: [],
  pushNotification: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  about: Yup.string().required('Required'),
  photo: Yup.mixed().required('File is required'),
  coverPhoto: Yup.mixed().required('File is required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  country: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
});

interface FormikWrapperProps {
  setOpen: (value: boolean) => void;
  onRegister: (values: IValues) => void;
}

const FormikWrapper: FC<FormikWrapperProps> = ({ setOpen, onRegister }) => {
  const photoRef = useRef<HTMLInputElement>(null);

  const onSubmit = (values: IValues) => {
    onRegister(values);
    setOpen(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      {({ setFieldValue, values }) => (
        <FormikForm
          setFieldValue={setFieldValue}
          values={values}
          photoRef={photoRef}
          setOpen={setOpen}
        />
      )}
    </Formik>
  );
};

export default FormikWrapper;
