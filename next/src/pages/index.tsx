import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { IClient } from '../types/clients';
import { useRouter } from 'next/router';

const Index: NextPage = () => {
    const router = useRouter();
    const [highlightId, setHighlightId] = useState<string>('');
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

    useEffect(() => {
        if (router.query.highlight) {
            setHighlightId(router.query.highlight.toString());
        }
    }, [router.query]);

    const onRegister = () => {};

    return (
        <>
            <ClientTable
                clients={clients}
                onRegister={onRegister}
                highlightId={highlightId}
            />
        </>
    );
};

export default Index;
