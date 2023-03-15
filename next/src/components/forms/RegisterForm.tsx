import { Dispatch, SetStateAction } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

export default function RegisterForm({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const formik = useFormik({
    initialValues: {
      username: '',
      about: '',
      file: null,
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      notificationEmail: [],
      pushNotifications: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      about: Yup.string()
        .required('Required')
        .max(100, 'Must be 100 characters or less'),
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      country: Yup.string().required('Required'),
      streetAddress: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      zip: Yup.string().required('Required'),
      pushNotifications: Yup.string().required('Required'),
      file: Yup.mixed()
        .required('A file is required')
        .test({
          message: 'Please provide a supported file type',
          test: (file, context) => {
            const isValid = ['png', 'jpg'].includes(
              file?.name.split('.').at(-1)
            );
            if (!isValid) context?.createError();
            return isValid;
          },
        })
        .test({
          message: `File too big, can't exceed ${1000000}`,
          test: (file) => {
            const isValid = file?.size < 1000000;
            return isValid;
          },
        }),
    }),
    onSubmit: async (values) => {
      const result = await fetch('/api/clients', {
        method: 'POST',
        body: JSON.stringify(formik.values),
      }).then((res) => res.json());
      if (result.message === 'Client created') {
        formik.resetForm();
        setOpen(false);
        toast.success('Client created');
      }
    },
  });
  return (
    <form
      className='space-y-8 divide-y divide-gray-200'
      onSubmit={formik.handleSubmit}
    >
      <div className='space-y-8 divide-y divide-gray-200'>
        <div>
          <div>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>
              Profile
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='username'
                className='block text-sm font-medium text-gray-700'
              >
                Username
              </label>
              <div className='mt-1 flex rounded-md shadow-sm'>
                <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm'>
                  workcation.com/
                </span>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  type='text'
                  name='username'
                  id='username'
                  autoComplete='username'
                  className='block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              {formik.touched.username && formik.errors.username ? (
                <div className='text-red-500'>{formik.errors.username}</div>
              ) : null}
            </div>

            <div className='sm:col-span-6'>
              <label
                htmlFor='about'
                className='block text-sm font-medium text-gray-700'
              >
                About
              </label>
              <div className='mt-1'>
                <textarea
                  onChange={formik.handleChange}
                  value={formik.values.about}
                  id='about'
                  name='about'
                  rows={3}
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  defaultValue={''}
                />
              </div>
              <p className='mt-2 text-sm text-gray-500'>
                Write a few sentences about yourself.
              </p>
              {formik.touched.about && formik.errors.about ? (
                <div className='text-red-500'>{formik.errors.about}</div>
              ) : null}
            </div>

            <div className='sm:col-span-6'>
              <label
                htmlFor='photo'
                className='block text-sm font-medium text-gray-700'
              >
                Photo
              </label>
              <div className='mt-1 flex items-center'>
                <span className='h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
                  <svg
                    className='h-full w-full text-gray-300'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                  </svg>
                </span>
                <button
                  type='button'
                  className='ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Change
                </button>
              </div>
            </div>

            <div className='sm:col-span-6'>
              <label
                htmlFor='cover-photo'
                className='block text-sm font-medium text-gray-700'
              >
                Cover photo
              </label>
              <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                <div className='space-y-1 text-center'>
                  <svg
                    className='mx-auto h-12 w-12 text-gray-400'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 48 48'
                    aria-hidden='true'
                  >
                    <path
                      d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <div className='flex text-sm text-gray-600'>
                    <label
                      htmlFor='file-upload'
                      className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                    >
                      <span>Upload a file</span>
                      <input
                        id='file-upload'
                        name='file'
                        type='file'
                        // value={formik.values.file}
                        onChange={(event) => {
                          formik.setFieldValue(
                            'file',
                            // @ts-ignore
                            event.currentTarget.files[0]
                          );
                        }}
                        className='sr-only'
                      />
                    </label>
                    <p className='pl-1'>or drag and drop</p>
                  </div>
                  <p className='text-xs text-gray-500'>
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              {formik.touched.file && formik.errors.file ? (
                <div className='text-red-500'>{formik.errors.file}</div>
              ) : null}
            </div>
          </div>
        </div>

        <div className='pt-8'>
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
              <label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-700'
              >
                First name
              </label>
              <div className='mt-1'>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  type='text'
                  name='firstName'
                  id='firstName'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className='text-red-500'>{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium text-gray-700'
              >
                Last name
              </label>
              <div className='mt-1'>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  type='text'
                  name='lastName'
                  id='lastName'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className='text-red-500'>{formik.errors.lastName}</div>
              ) : null}
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <div className='mt-1'>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className='text-red-500'>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='country'
                className='block text-sm font-medium text-gray-700'
              >
                Country
              </label>
              <div className='mt-1'>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  id='country'
                  name='country'
                  autoComplete='country-name'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                >
                  <option selected>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
              {formik.touched.country && formik.errors.country ? (
                <div className='text-red-500'>{formik.errors.country}</div>
              ) : null}
            </div>

            <div className='sm:col-span-6'>
              <label
                htmlFor='streetAddress'
                className='block text-sm font-medium text-gray-700'
              >
                Street address
              </label>
              <div className='mt-1'>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.streetAddress}
                  type='text'
                  name=''
                  id='streetAddress'
                  autoComplete='street-address'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              {formik.touched.streetAddress && formik.errors.streetAddress ? (
                <div className='text-red-500'>
                  {formik.errors.streetAddress}
                </div>
              ) : null}
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='city'
                className='block text-sm font-medium text-gray-700'
              >
                City
              </label>
              <div className='mt-1'>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  type='text'
                  name='city'
                  id='city'
                  autoComplete='address-level2'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              {formik.touched.city && formik.errors.city ? (
                <div className='text-red-500'>{formik.errors.city}</div>
              ) : null}
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='state'
                className='block text-sm font-medium text-gray-700'
              >
                State / Province
              </label>
              <div className='mt-1'>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.state}
                  type='text'
                  name='state'
                  id='state'
                  autoComplete='address-level1'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              {formik.touched.state && formik.errors.state ? (
                <div className='text-red-500'>{formik.errors.state}</div>
              ) : null}
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='zip'
                className='block text-sm font-medium text-gray-700'
              >
                ZIP / Postal code
              </label>
              <div className='mt-1'>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.zip}
                  type='text'
                  name='zip'
                  id='zip'
                  autoComplete='zip'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              {formik.touched.zip && formik.errors.zip ? (
                <div className='text-red-500'>{formik.errors.zip}</div>
              ) : null}
            </div>
          </div>
        </div>

        <div className='pt-8'>
          <div>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>
              Notifications
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>
          </div>
          <div className='mt-6'>
            <fieldset>
              <legend className='sr-only'>By Email</legend>
              <div
                className='text-sm font-semibold text-gray-900'
                aria-hidden='true'
              >
                By Email
              </div>
              <div className='mt-4 space-y-4'>
                <div className='relative flex items-start'>
                  <div className='flex h-5 items-center'>
                    <input
                      onChange={formik.handleChange}
                      value='Comments'
                      id='notificationEmail'
                      name='notificationEmail'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='comments'
                      className='font-medium text-gray-700'
                    >
                      Comments
                    </label>
                    <p className='text-gray-500'>
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className='relative flex items-start'>
                  <div className='flex h-5 items-center'>
                    <input
                      onChange={formik.handleChange}
                      value='Candidates'
                      id='notificationEmail'
                      name='notificationEmail'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='candidates'
                      className='font-medium text-gray-700'
                    >
                      Candidates
                    </label>
                    <p className='text-gray-500'>
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div className='relative flex items-start '>
                  <div className='flex h-5 items-center'>
                    <input
                      onChange={formik.handleChange}
                      value='Offers'
                      id='notificationEmail'
                      name='notificationEmail'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='offers'
                      className='font-medium text-gray-700'
                    >
                      Offers
                    </label>
                    <p className='text-gray-500'>
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className='mt-6'>
              <legend className='contents text-sm font-semibold text-gray-900'>
                Push Notifications
              </legend>
              <p className='text-sm text-gray-500'>
                These are delivered via SMS to your mobile phone.
              </p>
              {formik.touched.pushNotifications &&
              formik.errors.pushNotifications ? (
                <div className='text-red-500'>
                  {formik.errors.pushNotifications}
                </div>
              ) : null}
              <div className='mt-4 space-y-4'>
                <div className='flex items-center'>
                  <input
                    onChange={formik.handleChange}
                    value={'Everything'}
                    id='push-everything'
                    name='pushNotifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='push-everything'
                    className='ml-3 block text-sm font-medium text-gray-700'
                  >
                    Everything
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    onChange={formik.handleChange}
                    value={'Same as email'}
                    id='push-email'
                    name='pushNotifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='push-email'
                    className='ml-3 block text-sm font-medium text-gray-700'
                  >
                    Same as email
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    onChange={formik.handleChange}
                    value={'No push notifications'}
                    id='push-nothing'
                    name='pushNotifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='push-nothing'
                    className='ml-3 block text-sm font-medium text-gray-700'
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className='pt-5'>
        <div className='flex justify-end'>
          <button
            onClick={() => {
              formik.resetForm();
              setOpen(false);
            }}
            type='button'
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
    </form>
  );
}
