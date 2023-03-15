import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-hot-toast';

export default function ClientTable({
  clients,
  registerModal,
  setRegisterModal,
  highlight,
}: {
  clients: {
    id: string;
    avatar: string;
    email: string;
    fullName: string;
    supportTier: 'standard' | 'gold' | 'platinum';
    hourlyRate: number;
  }[];

  // Registration modal state variable
  registerModal: boolean;
  setRegisterModal: Dispatch<SetStateAction<boolean>>;

  // Highlight query parameter
  highlight: string;
}) {
  return (
    <>
      <div className='border-b border-gray-200 bg-white px-4 py-5 sm:px-6'>
        <div className='-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap'>
          <div className='ml-4 mt-2'>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>
              Clients
            </h3>
          </div>
          <div className='ml-4 mt-2 flex-shrink-0'>
            <button
              type='button'
              className='relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              onClick={() => setRegisterModal(!registerModal)}
            >
              Register new client
            </button>
          </div>
        </div>

        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='mt-8 flow-root'>
            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
                      >
                        Name
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Rate
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Support Tier
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {clients.map((client) => (
                      <tr
                        key={client.id}
                        // If the client id matches the highlight query parameter, The background color will be set to sandy
                        className={highlight === client.id ? 'bg-sandy' : ' '}
                      >
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0'>
                          <div className='flex items-center'>
                            <div className='h-10 w-10 flex-shrink-0'>
                              <img
                                className='h-10 w-10 rounded-full'
                                src={client.avatar}
                                alt='avatar'
                              />
                            </div>
                            <div className='ml-4'>
                              <div className='font-medium text-gray-900'>
                                {/* Instead of having firstName and lastName, changed the data itself to fullName = firstName + lastName */}
                                {client.fullName}
                              </div>
                              <div
                                className='text-gray-500 cursor-pointer'
                                // When the user clicks on the email, it will copy the email id to the clipboard
                                onClick={() => {
                                  toast.success('Copied to clipboard');
                                  navigator.clipboard.writeText(client.email);
                                }}
                              >
                                {client.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          <div className='text-gray-900'>
                            {`$${client.hourlyRate}/hr`}
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {client.supportTier === 'gold' ? (
                            <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                              Gold
                            </span>
                          ) : client.supportTier === 'platinum' ? (
                            <span className='inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800'>
                              Platinum
                            </span>
                          ) : (
                            <span className='inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800'>
                              Standard
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
