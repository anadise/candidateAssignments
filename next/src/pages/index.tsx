import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { ClientData, RegisterNewClient } from "../types";

const Index: NextPage = () => {
    //initializing state
    const [clients, setClients] = useState<ClientData[]>([])

    useEffect(() => {
        //Getting Data
        try {
            request('GET', '/clients').then(({ body: data, status }) => {
                if (status === 200) {
                    setClients(data?.clients.map((client: ClientData) => ({
                        ...client,
                        fullName: `${client.firstName} ${client.lastName}`
                    })))
                }
            })
        } catch (err) {
        }
    }, [])
    //Registering Data
    const onRegister = async (data: RegisterNewClient) => {
        try {
            const result = await request('POST', '/clients', data)
        } catch (err) {
        }
    }

    return (
        <>
            <ClientTable clients={clients} onRegister={onRegister} />
        </>
    );
};

export default Index;
