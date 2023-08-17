import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { IClient, IClientRaw } from '../types/clients';
import { useRouter } from 'next/router';

// convert client to displayable object
const convertClient = (raw: IClientRaw): IClient => ({
    ...raw,
    fullName: `${raw.firstName} ${raw.lastName}`,
});

const Index: NextPage = () => {
    const router = useRouter();
    const [highlightId, setHighlightId] = useState<string>('');
    const [clients, setClients] = useState<IClient[]>([]);

    useEffect(() => {
        // fetches initial list on load
        request('GET', '/clients').then(res => {
            setClients(res.body.clients.map(convertClient));
        });
    }, []);

    useEffect(() => {
        // checkes if query ?hightlight exists
        if (router.query.highlight) {
            setHighlightId(router.query.highlight.toString());
        }
    }, [router.query]);

    const onRegister = (data: IClientRaw) => {
        // post new client and adds the result to the beginning of the list
        request('POST', '/clients', data).then(res =>
            setClients(clients => [convertClient(res.body.client), ...clients])
        );
    };

    return (
        <>
            <ClientTable
                clients={clients}
                onRegister={onRegister}
                // passes highligh id option
                highlightId={highlightId}
            />
        </>
    );
};

export default Index;
