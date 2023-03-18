export default function Example({ setOpen, onSubmit }: { setOpen: any, onSubmit: any }) {
    return (
        <form id="register_form" className='space-y-8 divide-y divide-gray-200' method="post" action="/api/clients" encType="multipart/form-data" onSubmit={(e) => {
            e.preventDefault()

            const formElement = document.querySelector("#register_form");
            const formData = new FormData(formElement as HTMLFormElement);

            onSubmit(formData)
        }} >
            <div className='space-y-8 divide-y divide-gray-200'>
                <div>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                            Register
                        </h3>
                    </div>

                    <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                        <div className='sm:col-span-6'>
                            <label
                                htmlFor='cover-photo'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Photo
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
                                                required
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
                                    required
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
                                    required
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='birthday'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Birthday
                            </label>
                            <div className='mt-1'>
                                <input
                                    type='date'
                                    name='birthday'
                                    id='birthday'
                                    autoComplete='birthday'
                                    required
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
                                    required
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                            </div>
                        </div>
                        
                        <div className='sm:col-span-4'>
                            <label
                                htmlFor='hourlyRate'
                                className='block text-sm font-medium text-gray-700'
                            >
                                Hourly Rate
                            </label>
                            <div className='mt-1 flex rounded-md shadow-sm'>
                                <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm'>
                                    $
                                </span>
                                <input
                                    type='number'
                                    name='hourlyRate'
                                    id='hourlyRate'
                                    autoComplete='hourlyRate'
                                    required
                                    className='block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                />
                                <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm'>
                                    /Hour
                                </span>
                            </div>
                        </div>

                        <fieldset className='mt-6'>
                            <legend className='contents text-sm font-semibold text-gray-900'>
                                Gender
                            </legend>
                            <div className='mt-4 space-y-4'>
                                <div className='flex items-center'>
                                    <input
                                        id='male'
                                        name='sex'
                                        type='radio'
                                        required
                                        value='male'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                        htmlFor='male'
                                        className='ml-3 block text-sm font-medium text-gray-700'
                                    >
                                        Male
                                    </label>
                                </div>
                                <div className='flex items-center'>
                                    <input
                                        id='female'
                                        name='sex'
                                        type='radio'
                                        required
                                        value='female'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                        htmlFor='female'
                                        className='ml-3 block text-sm font-medium text-gray-700'
                                    >
                                        Female
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className='mt-6'>
                            <legend className='contents text-sm font-semibold text-gray-900'>
                                Support Tier
                            </legend>
                            <div className='mt-4 space-y-4'>
                                <div className='flex items-center'>
                                    <input
                                        id='standard'
                                        name='supportTier'
                                        type='radio'
                                        required
                                        value='standard'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                        htmlFor='standard'
                                        className='ml-3 block text-sm font-medium text-gray-700'
                                    >
                                        Standard
                                    </label>
                                </div>
                            </div>
                            <div className='mt-4 space-y-4'>
                                <div className='flex items-center'>
                                    <input
                                        id='gold'
                                        name='supportTier'
                                        type='radio'
                                        required
                                        value='gold'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                        htmlFor='gold'
                                        className='ml-3 block text-sm font-medium text-gray-700'
                                    >
                                        Gold
                                    </label>
                                </div>
                            </div>
                            <div className='mt-4 space-y-4'>
                                <div className='flex items-center'>
                                    <input
                                        id='platium'
                                        name='supportTier'
                                        type='radio'
                                        required
                                        value='platium'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                        htmlFor='platium'
                                        className='ml-3 block text-sm font-medium text-gray-700'
                                    >
                                        Platium
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
                        onClick={(e) => setOpen(false)}
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
