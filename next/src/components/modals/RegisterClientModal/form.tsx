import { Field, Form, Formik } from 'formik';
import { number, object, string } from 'yup';
import { IClientRaw } from '../../../types/clients';

// validates form on submittion
let clientSchema = object({
    firstName: string().required('required'),
    lastName: string().required('required'),
    email: string().email('must be a valid email').required('required'),
    hourlyRate: number().required('required').positive('must be positive'),
});

const NewClientForm: React.FC<{
    onSubmit: (data: IClientRaw) => void;
    onCancel: () => void;
}> = ({ onSubmit, onCancel }) => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                hourlyRate: 0,
                supportTier: 'standart',
                sex: 'female',
            }}
            // validates schema on submittion
            validationSchema={clientSchema}
            onSubmit={async values =>
                onSubmit({ id: '', avatar: '', ...values })
            }
        >
            {formik => (
                <Form className='space-y-8 divide-y divide-gray-200'>
                    <div>
                        <h3 className='text-base font-semibold leading-6 text-gray-900'>
                            New client
                        </h3>
                        <div className='pt-0'>
                            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                                <div className='sm:col-span-6'>
                                    <label
                                        htmlFor='firstName'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        First name
                                    </label>
                                    <div className='mt-1'>
                                        <Field
                                            type='text'
                                            name='firstName'
                                            id='firstName'
                                            autoComplete='given-name'
                                            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                        />
                                        {formik.touched.firstName &&
                                        formik.errors.firstName ? (
                                            <div className='text-sm mt-2 text-red-500'>
                                                {formik.errors.firstName}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className='sm:col-span-6'>
                                    <label
                                        htmlFor='lastName'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Last name
                                    </label>
                                    <div className='mt-1'>
                                        <Field
                                            type='text'
                                            name='lastName'
                                            id='lastName'
                                            autoComplete='family-name'
                                            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                        />
                                        {formik.touched.lastName &&
                                        formik.errors.lastName ? (
                                            <div className='text-sm mt-2 text-red-500'>
                                                {formik.errors.lastName}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className='sm:col-span-6'>
                                    <label
                                        htmlFor='email'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Email address
                                    </label>
                                    <div className='mt-1'>
                                        <Field
                                            id='email'
                                            name='email'
                                            type='email'
                                            autoComplete='email'
                                            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                        />
                                        {formik.touched.email &&
                                        formik.errors.email ? (
                                            <div className='text-sm mt-2 text-red-500'>
                                                {formik.errors.email}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='supportTier'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Support Tier
                                    </label>
                                    <div className='mt-1'>
                                        <Field
                                            component='select'
                                            id='supportTier'
                                            name='supportTier'
                                            autoComplete='supportTier-name'
                                            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                        >
                                            <option value='standard'>
                                                Standard
                                            </option>
                                            <option value='gold'>Gold</option>
                                            <option value='platinum'>
                                                Platinum
                                            </option>
                                        </Field>
                                    </div>
                                </div>
                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='hourlyRate'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Hourly rate
                                    </label>
                                    <div className='mt-1'>
                                        <Field
                                            id='hourlyRate'
                                            name='hourlyRate'
                                            type='number'
                                            autoComplete='hourlyRate'
                                            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                        />
                                        {formik.touched.hourlyRate &&
                                        formik.errors.hourlyRate ? (
                                            <div className='text-sm mt-2 text-red-500'>
                                                {formik.errors.hourlyRate}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='gender'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Gender
                                    </label>
                                    <div className='mt-1'>
                                        <Field
                                            component='select'
                                            id='gender'
                                            name='gender'
                                            autoComplete='gender-name'
                                            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                        >
                                            <option value='female'>
                                                Female
                                            </option>
                                            <option value='male'>Male</option>
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-5'>
                        <div className='flex justify-end'>
                            <button
                                type='button'
                                className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                onClick={onCancel}
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

export default NewClientForm;
