import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { IClient, IClientRaw } from '../types/clients';
import { useRouter } from 'next/router';

const convertClient = (raw: IClientRaw): IClient => ({
    ...raw,
    fullName: `${raw.firstName} ${raw.lastName}`,
});

const Index: NextPage = () => {
    const router = useRouter();
    const [highlightId, setHighlightId] = useState<string>('');
    const [clients, setClients] = useState<IClient[]>([]);

    useEffect(() => {
        request('GET', '/clients').then(res => {
            setClients(res.body.clients.map(convertClient));
        });
    }, []);

    useEffect(() => {
        if (router.query.highlight) {
            setHighlightId(router.query.highlight.toString());
        }
    }, [router.query]);

    const onRegister = (data: IClientRaw) => {
        request('POST', '/clients', data).then(res =>
            setClients(clients => [convertClient(res.body.client), ...clients])
        );
    };

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
