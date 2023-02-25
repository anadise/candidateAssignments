import type {NextPage} from 'next';
import {useState, useEffect} from 'react';
import {request} from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import {IClient} from "../types";


const Index: NextPage = () => {

    const [isFetching, setIsFetching] = useState<boolean>(true)
    const [clients, setClients] = useState<IClient[]>([])

    const onRegister = () => {
    } // TODO - I need to create this functions

    useEffect(() => {
        request('GET', '/clients').then(({body: data, status}) => {
            if (status === 200) {
                setClients(data?.clients)
            }
            setIsFetching(false)
        })
    }, [])

    if (isFetching) {
        return <div
            className="flex flex-col items-center justify-center w-full px-4 py-2 font-semibold leading-6 text-sm transition ease-in-out duration-150">
            <svg className="animate-spin mr-2 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24">
                <circle className="opacity-25 stroke-indigo-500" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75 fill-indigo-500" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            Fetching data...
        </div>
    }

    return (
        <>
            <ClientTable clients={clients} onRegister={onRegister}/>
        </>
    );
};

export default Index;
