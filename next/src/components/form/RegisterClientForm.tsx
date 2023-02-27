import React, { useState, ChangeEvent } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from "../Input";
import Dropdown from "../Dropdown";
import { RegisterNewClient } from "../../types";

const RegisterClientSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Required')
        .min(2, 'First Name should be at least 2 characters')
        .max(50, 'First Name should be less than 24 characters'),
    lastName: Yup.string()
        .required('Required')
        .min(2, 'Last Name should be at least 2 characters')
        .max(50, 'Last Name should be less than 24 characters'),
    email: Yup.string().email('Invalid email').required('Required'),
    sex: Yup.string().required('Required'),
    birthday: Yup.string().required('Required'),
    supportTier: Yup.string().required('Required'),
    hourlyRate: Yup.string().required('Required'),
});

const initialValues: RegisterNewClient = {
    avatar: '',
    birthday: '',
    email: '',
    firstName: '',
    lastName: '',
    sex: 'male',
    supportTier: 'standard',
    hourlyRate: 60
}

const RegisterClientForm = ({ handleClose, onRegister }: { handleClose: () => void, onRegister: (data: RegisterNewClient) => void }) => {
    const [registerimage, setRegisterImage] = useState(null);

    const onSubmit = (values: RegisterNewClient) => {
        onRegister(values)
        handleClose()
    }

    const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        const selectedFiles = files as FileList;
        setRegisterImage(selectedFiles?.[0]);

        // Or if you don't prefer Object destructuring assignment...
        // const files = event.target.files;

        // Rest of the logic here
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegisterClientSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={onSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
            }) => (
                <Form className='space-y-8  divide-gray-200'>
                    <div className='space-y-8  divide-gray-200'>
                        <div>
                            <div>
                                <h3 className='text-base font-semibold leading-6 text-gray-900'>
                                    Profile
                                </h3>
                                <p className='mt-1 text-sm text-gray-500'>
                                    This information will be displayed publicly so be
                                    careful what you share.
                                </p>
                            </div>

                            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                                <div className='sm:col-span-6'>
                                    <label
                                        htmlFor='photo'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Avatar
                                    </label>
                                    <div className='mt-1 flex items-center'>
                                        <span className='h-12 w-12 overflow-hidden rounded-full bg-gray-100 mr-4'>
                                            {
                                                registerimage ? (
                                                    <img
                                                        width={"250px"}
                                                        src={URL.createObjectURL(registerimage)}
                                                    />
                                                ) : (
                                                    <svg
                                                        className='h-full w-full text-gray-300'
                                                        fill='currentColor'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path
                                                            d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                                    </svg>
                                                )
                                            }
                                        </span>
                                        <label className="block">
                                            <span className="sr-only">Choose profile photo</span>
                                            <input type="file" className="block w-full text-sm text-slate-500
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-full file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-indigo-50 file:text-indigo-700
                                            hover:file:bg-indigo-100
                                            "/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-1'>
                            <div>
                                <h3 className='text-base font-semibold leading-6 text-gray-900'>
                                    Personal Information
                                </h3>
                                <p className='mt-1 text-sm text-gray-500'>
                                    Use a permanent address where you can receive mail.
                                </p>
                            </div>
                            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                                <div className='sm:col-span-3'>
                                    <Input
                                        label='First name'
                                        touched={touched.firstName}
                                        errorMessage={errors.firstName}
                                        type='text'
                                        name='firstName'
                                        id='firstName'
                                        autoComplete='given-name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                    />
                                </div>
                                <div className='sm:col-span-3'>
                                    <Input
                                        label='Last name'
                                        touched={touched.lastName}
                                        errorMessage={errors.lastName}
                                        type='text'
                                        name='lastName'
                                        id='lastName'
                                        autoComplete='family-name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                    />
                                </div>

                                <div className='sm:col-span-6'>
                                    <Input
                                        label='Email address'
                                        touched={touched.email}
                                        errorMessage={errors.email}
                                        id='email'
                                        name='email'
                                        type='email'
                                        autoComplete='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </div>

                                <div className='sm:col-span-3'>
                                    <Dropdown
                                        label='Sex'
                                        touched={touched.sex}
                                        errorMessage={errors.sex}
                                        id='sex'
                                        name='sex'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sex}
                                        placeholder='Choose a sex'
                                        options={[
                                            {
                                                value: 'male',
                                                label: 'Male',
                                            },
                                            {
                                                value: 'female',
                                                label: 'Female',
                                            },
                                            {
                                                value: 'other',
                                                label: 'Other',
                                            }
                                        ]}
                                    />
                                </div>
                                <div className='sm:col-span-3'>
                                    <Input
                                        label='Birthday'
                                        touched={touched.birthday}
                                        errorMessage={errors.birthday}
                                        id='birthday'
                                        name='birthday'
                                        type='date'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.birthday}
                                    />
                                </div>



                                <div className='sm:col-span-3'>
                                    <Dropdown
                                        label='Support tier'
                                        touched={touched.supportTier}
                                        errorMessage={errors.supportTier}
                                        id='supportTier'
                                        name='supportTier'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.supportTier}
                                        placeholder='Choose a tier'
                                        options={[
                                            {
                                                value: 'standard',
                                                label: 'Standard',
                                            },
                                            {
                                                value: 'gold',
                                                label: 'Gold',
                                            },
                                            {
                                                value: 'platinum',
                                                label: 'Platinum',
                                            }
                                        ]}
                                    />
                                </div>
                                <div className='sm:col-span-3'>
                                    <Dropdown
                                        label='Hourly Rate'
                                        touched={touched.hourlyRate}
                                        errorMessage={errors.hourlyRate}
                                        id='hourlyRate'
                                        name='hourlyRate'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.hourlyRate}
                                        placeholder='Choose hourly rate'
                                        options={[
                                            {
                                                value: '60',
                                                label: '60',
                                            },
                                            {
                                                value: '75',
                                                label: '75',
                                            },
                                            {
                                                value: '100',
                                                label: '100',
                                            },
                                            {
                                                value: '125',
                                                label: '125',
                                            }
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-5'>
                        <div className='flex justify-end'>
                            <button
                                type='button'
                                onClick={handleClose}
                                className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                            >
                                Cancel
                            </button>
                            <button
                                type='submit'
                                className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterClientForm;