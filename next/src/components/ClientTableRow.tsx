import React, {memo} from 'react';
import {IClient} from "../types";

const ClientTableRow: React.FC<{ client: IClient, highlight: boolean }> = ({client, highlight=false}) => {
    return (
        <tr id={client.id} key={client.id} className={highlight ? 'bg-sandy-500' : 'bg-white'}>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0'>
                <div className='flex items-center'>
                    <div className='h-10 w-10 flex-shrink-0'>
                        <img
                            className='h-10 w-10 rounded-full'
                            src={
                                client.avatar
                            }
                            alt=''
                        />
                    </div>
                    <div className='ml-4'>
                        <div className='font-medium text-gray-900'>
                            {
                                client.fullName
                            }
                        </div>
                        <div className='text-gray-500 select-text'>
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
                {client.supportTier ===
                'gold' ? (
                    <span
                        className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                                                            Gold
                                                        </span>
                ) : client.supportTier ===
                'platinum' ? (
                    <span
                        className='inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800'>
                                                            Platinum
                                                        </span>
                ) : (
                    <span
                        className='inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800'>
                                                            Standard
                                                        </span>
                )}
            </td>
        </tr>
    );
};

export default memo(ClientTableRow);