import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  SyntheticEvent,
  useRef,
} from "react";
import { Form, FormikProps } from "formik";
// interface IProps {
// }
interface IProps {
  firstName: string;
  lastName: string;
  email: string;
  fileUpload: string;
  supportTier: string;
  hourlyRate: string;
  hideModal: () => void;
}

const RegisterClientForm = ({
  handleReset,
  handleChange,
  errors,
  hideModal,
}: Partial<IProps & FormikProps<IProps>>) => {
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleFormReset = () => {
    hideModal?.();
    handleReset?.();
  };
  return (
    <Form className='space-y-8 divide-y divide-gray-200'>
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
            <div className='sm:col-span-6'>
              <label
                htmlFor='cover-photo'
                className='block text-sm font-medium text-gray-700'>
                Cover photo
              </label>
              <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                <div className='space-y-1 text-center'>
                  <svg
                    className='mx-auto h-12 w-12 text-gray-400'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 48 48'
                    aria-hidden='true'>
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
                      className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'>
                      <span>Upload a file</span>
                      <input
                        id='file-upload'
                        name='fileUpload'
                        type='file'
                        className='sr-only'
                        ref={fileUploadRef}
                        onChange={handleChange}
                      />
                    </label>
                    <p className='pl-1'>or drag and drop</p>
                  </div>
                  <p className='text-xs text-gray-500'>
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              {errors?.fileUpload && (
                <div className='flex justify-center align-middle font-semibold text-gray-900'>
                  {errors?.fileUpload}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='pt-8'>
          <div>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>
              Personal Information
            </h3>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium text-gray-700'>
                First name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='firstName'
                  id='first-name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  onChange={handleChange}
                />
                {errors?.firstName && (
                  <div className='flex justify-center align-middle  text-red-500 text-sm'>
                    {errors?.firstName}
                  </div>
                )}
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium text-gray-700'>
                Last name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='lastName'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  onChange={handleChange}
                />
                {errors?.lastName && (
                  <div className='flex justify-center align-middle  text-red-500 text-sm'>
                    {errors?.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className='sm:col-span-6'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  onChange={handleChange}
                />
                {errors?.email && (
                  <div className='flex justify-center align-middle  text-red-500 text-sm'>
                    {errors?.email}
                  </div>
                )}
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='supportTier'
                className='block text-sm font-medium text-gray-700'>
                Support Tier
              </label>
              <div className='mt-1'>
                <select
                  id='supportTier'
                  name='supportTier'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  onChange={handleChange}
                  defaultValue=''>
                  <option value='' disabled>
                    Please select an option
                  </option>
                  <option value={"standard"}>standard</option>
                  <option value={"gold"}>gold</option>
                  <option value={"platinum"}>platinum</option>
                </select>
                {errors?.supportTier && (
                  <div className='flex justify-center align-middle  text-red-500 text-sm'>
                    {errors?.supportTier}
                  </div>
                )}
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='hourlyRate'
                className='block text-sm font-medium text-gray-700'>
                Hourly Rate
              </label>
              <div className='mt-1'>
                <input
                  type='number'
                  name='hourlyRate'
                  id='hourlyRate'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  onChange={handleChange}
                />
                {errors?.hourlyRate && (
                  <div className='flex justify-center align-middle text-red-500 text-sm'>
                    {errors?.hourlyRate}
                  </div>
                )}
              </div>
            </div>
            <div className='sm:col-span-6'>
              <fieldset>
                <legend className='text-left text-sm font-semibold text-gray-900'>
                  Gender
                </legend>
                <div className='mt-4 space-y-4'>
                  <div className='flex items-center'>
                    <input
                      id='Male'
                      name='gender'
                      type='radio'
                      value={"male"}
                      defaultChecked
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      onChange={handleChange}
                    />
                    <label
                      htmlFor='push-everything'
                      className='ml-3 block text-sm font-medium text-gray-700'>
                      Male
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='female'
                      name='gender'
                      type='radio'
                      value={"female"}
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      onChange={handleChange}
                    />
                    <label
                      htmlFor='push-nothing'
                      className='ml-3 block text-sm font-medium text-gray-700'>
                      Female
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-5'>
        <div className='flex justify-end'>
          <button
            type='button'
            className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={handleFormReset}>
            Cancel
          </button>
          <button
            type='submit'
            className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            Save
          </button>
        </div>
      </div>
    </Form>
  );
};
export default RegisterClientForm;
