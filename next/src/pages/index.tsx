import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { IClient } from '../types/clients';

const Index: NextPage = () => {
    const [clients, setClients] = useState<IClient[]>([]);

    useEffect(() => {
        request('GET', '/clients').then(res => {
            console.log(res.body);
            setClients(
                res.body.clients.map(
                    (client: { firstName: any; lastName: any }) => ({
                        ...client,
                        fullName: `${client.firstName} ${client.lastName}`,
                    })
                )
            );
        });
    }, []);

    const onRegister = () => {};

    return (
        <>
            <ClientTable clients={clients} onRegister={onRegister} />
        </>
    );
};

export default Index;
