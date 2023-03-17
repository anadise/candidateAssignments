import React from 'react'
export default function ExampleForm({onRegister,setOpen}:{onRegister:any,setOpen:any}) {
    const handleSubmit=(event:any)=>{
        event.preventDefault()
        onRegister({
            "avatar": event.target[0].value,
            'firstName':event.target[1].value,
            'lastName':event.target[2].value,
            'email':event.target[3].value,
            'country':event.target[4].value,
        })
        setTimeout(()=>{
            setOpen(false)
        },3000)
    }
    return (
        <form className='space-y-8 divide-y divide-gray-200' onSubmit={handleSubmit}>
            <div className='space-y-8 divide-y divide-gray-200'>
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
                                htmlFor='cover-photo'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Profile photo
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
                                                name='file-upload'
                                                type='file'
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
                                htmlFor='first-name'
                                className='block text-sm font-medium text-gray-700'
                            >
                                First name
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='text'
                                    name='first-name'
                                    id='first-name'
                                    autoComplete='given-name'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='last-name'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Last name
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='text'
                                    name='last-name'
                                    id='last-name'
                                    autoComplete='family-name'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
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
                                    id='email'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
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
                                    id='country'
                                    name='country'
                                    autoComplete='country-name'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                    <option>India</option>
                                </select>
                            </div>
                        </div>

                        <div className='sm:col-span-6'>
                            <label
                                htmlFor='street-address'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Street address
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='text'
                                    name='street-address'
                                    id='street-address'
                                    autoComplete='street-address'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
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
                                    type='text'
                                    name='city'
                                    id='city'
                                    autoComplete='address-level2'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-2'>
                            <label
                                htmlFor='region'
                                className='block text-sm font-medium text-gray-700'
                            >
                                State / Province
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='text'
                                    name='region'
                                    id='region'
                                    autoComplete='address-level1'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-2'>
                            <label
                                htmlFor='postal-code'
                                className='block text-sm font-medium text-gray-700'
                            >
                                ZIP / Postal code
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='text'
                                    name='postal-code'
                                    id='postal-code'
                                    autoComplete='postal-code'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-5'>
                <div className='flex justify-end'>
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
